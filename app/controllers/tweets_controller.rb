class TweetsController < ApplicationController
    def create
        Tweet.create(content: tweet_params[:content], tweeter_id: current_user.id)
        redirect_to root_path
    end

    def show
        redirect_to controller: "comments", action: "index", id: params[:id]
    end

    def index
        if (current_user) 
            @tweet = Tweet.new
            @tweets = Tweet.where(tweeter_id: current_user.followed_users.map {|u| u.id}).order(updated_at: :desc)
            @comments = @tweets.map {|t| t.comments}
        else
            redirect_to login_path
        end
    end

    private

        def tweet_params
           params.require(:tweet).permit(:content) 
        end
end
