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
            @posts = Tweet.roots.where(tweeter_id: current_user.followed_users.map {|u| u.id}).order(updated_at: :desc)
            @tweets = []
            @posts.each do |tweet|
                if tweet.class.name == "Retweet" 
                    @tweets << { "tweet" => TweetSerializer.new(tweet), 
                            "quoted_tweet" => TweetSerializer.new(tweet.tweet),
                           "updatedAt" => tweet_updated_at_formatted_brief(tweet.tweet.updated_at),
                           "isOgLiked" => tweet.tweet.likers.include?(current_user),
                           "isOgRetweeted" => tweet.tweet.retweets.include?(current_user),
                           "postType" => "retweet" }
                elsif tweet.class.name == "Tweet"
                    @tweets << { "tweet" => TweetSerializer.new(tweet), 
                           "updatedAt" => tweet_updated_at_formatted_brief(tweet.updated_at),
                           "isLiked" => tweet.likers.include?(current_user),
                           "isRetweeted" => tweet.retweets.include?(current_user),
                           "postType" => "tweet" }
                end
           end
        else
            redirect_to login_path
        end
    end

    private

        def tweet_params
           params.require(:tweet).permit(:content) 
        end
end
