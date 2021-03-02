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
        @user = User.find_by!(handle: params[:handle])
        @tweets = @user.tweets + @user.retweets + @user.quote_tweets
        @posts = @tweets.sort_by(&:updated_at).reverse.to_a
        
        parents_already_posted = []
        @posts.map! do |post|
            postHash = {:postType => post.class.name.downcase, :updatedAt => tweet_updated_at_formatted_brief(post.updated_at)}
            if ["Like", "Retweet", "QuoteTweet"].include?(post.class.name) 
                postHash[:post] = LikeSerializer.new(post)
                parents_already_posted << post.tweet
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
                postHash[:quoted_tweet] = TweetSerializer.new(post.tweet)  
            end
            postHash
       end.compact!
=begin
        @posts.map! do |post|
            if post.parent             
                nil
            elsif post.class.name == "Retweet" 
                { "tweet" => TweetSerializer.new(post), 
                        "quoted_tweet" => TweetSerializer.new(post.tweet),
                       "updatedAt" => tweet_updated_at_formatted_brief(post.tweet.updated_at),
                       "isLiked" => post.tweet.likers.include?(current_user),
                       "isRetweeted" => post.tweet.retweets.include?(current_user),
                       "postType" => "retweet" }
            elsif post.class.name == "QuoteTweet"
                 { "tweet" => TweetSerializer.new(post), 
                        "quoted_tweet" => TweetSerializer.new(post.tweet),
                       "updatedAt" => tweet_updated_at_formatted_brief(post.tweet.updated_at),
                       "isLiked" => post.tweet.likers.include?(current_user),
                       "isRetweeted" => post.tweet.retweets.include?(current_user),
                       "postType" => "quote_tweet" }
            elsif post.class.name == "Tweet"
                { "tweet" => TweetSerializer.new(post), 
                       "updatedAt" => tweet_updated_at_formatted_brief(post.updated_at),
                       "isLiked" => post.likers.include?(current_user),
                       "isRetweeted" => post.retweets.include?(current_user),
                       "postType" => "tweet" }
            end
       end.compact!
=end
    #no replies
    end

    private

        def user_params
            params.require(:user).permit(:name, :email, :birthday, :username, :handle, :password)
        end
end
