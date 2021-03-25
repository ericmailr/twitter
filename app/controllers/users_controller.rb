class UsersController < ApplicationController
    include ApplicationHelper
    def new
        @user = User.new
    end

    def create
        User.create user_params
        if (User.find_by(username: user_params[:username])) 
            flash[:notice] = "Signed up! You may now log in."
            redirect_to login_path
        else 
            flash[:alert] = "Failed to sign up."
            redirect_to signup_path
        end
    end

    def show
        @main_content_type = "Profile"
        @user = User.find_by!(handle: params[:handle])
        @tweets = @user.tweets + @user.retweets + @user.quote_tweets + @user.likes
        @posts = @tweets.sort_by(&:updated_at).reverse.to_a
        @post_types = params[:post_types]
        
        parents_already_posted = []
        @posts.map! do |post|
            postHash = {:postType => post.class.name.downcase, :updatedAt => tweet_updated_at_formatted_brief(post.updated_at)}
            if ["Like", "Retweet", "QuoteTweet"].include?(post.class.name) 
                if parents_already_posted.include?(post.tweet)
                    postHash = nil
                else
                    postHash[:quoted_tweet] = TweetSerializer.new(post.tweet)  
                    postHash[:post] = LikeSerializer.new(post)
                    postHash[:isLiked] = post.tweet.likers.include?(current_user)
                    postHash[:isRetweeted] = post.tweet.retweeters.include?(current_user)
                    parents_already_posted << post.tweet
                end
            elsif parents_already_posted.include?(post.parent) || parents_already_posted.include?(post)
                postHash = nil
            else
                postHash[:post] = TweetSerializer.new(post)
                postHash[:isLiked] = post.likers.include?(current_user)
                postHash[:isRetweeted] = post.retweeters.include?(current_user)
                if post.parent
                    parents_already_posted << post.parent
                    postHash[:parent] = TweetSerializer.new(post.parent)
                    postHash[:parentUpdatedAt] = tweet_updated_at_formatted_brief(post.parent.updated_at)
                    postHash[:isParentLiked] = post.parent.likers.include?(current_user)
                    postHash[:isParentRetweeted] = post.parent.retweeters.include?(current_user)
                    postHash[:postType] = "reply"
                end
            end
            if ["Like", "Retweet", "QuoteTweet"].include?(post.class.name)
               # postHash[:quoted_tweet] = TweetSerializer.new(post.tweet)  
            end
            postHash
       end.compact!
     #  render component: "Profile", prerender: false, props: { posts: @posts, user: UserSerializer.new(@user), user_created_at: date_formatted(@user.created_at) } 
    end

    private

        def user_params
            params.require(:user).permit(:name, :email, :birthday, :username, :handle, :password)
        end
end
