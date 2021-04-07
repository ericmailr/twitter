class TweetsController < ApplicationController
    include ApplicationHelper
    before_action :authenticate_user!
    def new
        @tweet = Tweet.new
        if (params[:parent_id])
            @parent_id = params[:parent_id]
            @tweet.parent = Tweet.find(params[:parent_id])
        end
        head :ok #respond to http request with blank message, don't render view
    end

    def create
        @tweet = Tweet.create(content: tweet_params[:content], user_id: current_user.id)
        if (params[:parent_id])
            @tweet.update(parent_id: params[:parent_id])
            #redirect_to status_path(@tweet.parent.user.handle, @tweet.parent.id)
        else
            #redirect_to root_path
        end
        # may as well just do "render json:" since i'm not rendering html with rails views
        respond_to do |format|
            msg = { :status => "ok", :message => "Tweeted. Success!" }
            format.json  { render :json => msg } 
        end
    end

    def show
        @main_content_type = "Tweet"
        @tweet = Tweet.find(params[:id])
        respond_to do |format|
            format.json do
                msg = { :status => "ok", :message => "Success!", :likesCount => @tweet.likes.count, :retweetsCount => @tweet.retweets.count, :isLiked => @tweet.likers.include?(current_user), :isRetweeted => @tweet.retweeters.include?(current_user) }
                render :json => msg
            end
            format.html {  }
        end
        @content = {tweet: @tweet}
    end

    private

        def tweet_params
           params.require(:tweet).permit(:content) 
        end
end
