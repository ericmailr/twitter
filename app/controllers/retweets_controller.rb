class RetweetsController < ApplicationController
    #instance variables: @retweet, @og_tweet, etc
    def new
        @retweet = Retweet.new
        @og_tweet = Tweet.find(params[:quote_id])
    end

    def create
        @retweet = Retweet.create(tweeter_id: current_user.id, quote_id: retweet_params[:quote_id], content: Tweet.find(retweet_params[:quote_id]).content)
    end

    def destroy

    end

    private
        def retweet_params
           params.require(:retweet).permit(:content, :quote_id) 
        end

end
