class TweetsController < ApplicationController
    include ApplicationHelper
    def new
        @tweet = Tweet.new
        if (params[:parent_id])
            @parent_id = params[:parent_id]
            @tweet.parent = Tweet.find(params[:parent_id])
        end
    end

    def create
        @tweet = Tweet.create(content: tweet_params[:content], tweeter_id: current_user.id)
        if (params[:parent_id])
            @tweet.update_attributes(parent_id: params[:parent_id])
            redirect_to status_path(@tweet.parent.tweeter.handle, @tweet.parent.id)
        else
            redirect_to root_path
        end
    end

    def show
        @tweet = Tweet.find(params[:id])
        respond_to do |format|
            format.json do
                msg = { :status => "ok", :message => "Success!", :likesCount => @tweet.likes.count }
                render :json => msg
            end
            format.html {  }
        end
    end

    def index
        if (current_user) 
            @tweet = Tweet.new
            #how can i make this method smaller/simpler? 
            @posts = Tweet.where(tweeter_id: current_user.followed_users.map {|u| u.id}).order(updated_at: :desc).to_a
            parents_already_posted = []
            @posts.map! do |post|
                if post.class.name == "Like"
                    {"tweet" => TweetSerializer.new(post),
                     "quoted_tweet" => TweetSerializer.new(post.tweet),
                     "updatedAt" => tweet_updated_at_formatted_brief(post.tweet.updated_at),
                     "isLiked" => post.tweet.likers.include?(current_user),
                     "isRetweeted" => post.tweet.retweeters.include?(current_user),
                     "postType" => "like"}
                elsif post.parent             
                    if parents_already_posted.include?(post.parent)  
                        nil
                    else
                        parents_already_posted << post.parent
                        {"reply" => TweetSerializer.new(post), 
                         "replyUpdatedAt" => tweet_updated_at_formatted_brief(post.updated_at),
                         "isReplyLiked" => post.likers.include?(current_user),
                         "parent" => TweetSerializer.new(post.parent),
                         "parentUpdatedAt" => tweet_updated_at_formatted_brief(post.parent.updated_at),
                         "isParentLiked" => post.parent.likers.include?(current_user),
                         "postType" => "reply"
                        }
                    end
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
                    if parents_already_posted.include?(post)
                        nil
                    else
                    { "tweet" => TweetSerializer.new(post), 
                       "updatedAt" => tweet_updated_at_formatted_brief(post.updated_at),
                       "isLiked" => post.likers.include?(current_user),
                       "isRetweeted" => post.retweets.include?(current_user),
                       "postType" => "tweet" }
                    end
                end
           end.compact!
        else
            redirect_to login_path
        end
    end

    private

        def tweet_params
           params.require(:tweet).permit(:content) 
        end
end
