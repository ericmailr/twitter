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
        #@tweets = @user.tweets
        @posts = @user.tweets.sort_by(&:updated_at).reverse.to_a
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
    #no replies
    end

    private

        def user_params
            params.require(:user).permit(:name, :email, :birthday, :username, :handle, :password)
        end
end
