class TweetsController < ApplicationController
    def new
        @tweet = Tweet.new
        if (params[:parent_id])
            @parent_id = params[:parent_id]
            @tweet.parent = Tweet.find(params[:parent_id])
            @is_reply = true;
        else 
            @is_reply = false;
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
    end

    def index
        if (current_user) 
            @tweet = Tweet.new
            @tweets = Tweet.roots.where(tweeter_id: current_user.followed_users.map {|u| u.id}).order(updated_at: :desc)
            @posts = @tweets
            #add retweets to list
        else
            redirect_to login_path
        end
    end

    private

        def tweet_params
           params.require(:tweet).permit(:content) 
        end
end
