class TweetsController < ApplicationController
    def create
        Tweet.create(content: tweet_params[:content], tweeter_id: current_user.id)
        redirect_to root_path
    end

    def index
        @tweet = Tweet.new
    end

    private

        def tweet_params
           params.require(:tweet).permit(:content) 
        end
end
