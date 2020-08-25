class RetweetsController < ApplicationController
    def new
        @retweet = Retweet.new
        @og_tweet = Tweet.find(params[:tweet_id])
    end

    def create
        @retweet = Retweet.create(retweeter_id: current_user.id, tweet_id: params[:tweet_id])
        if (params[:content])
            @retweet.update_column(content: params[:content])
        end
    end

    def destroy

    end
end
