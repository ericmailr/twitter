class RetweetsController < ApplicationController
    def new
        @retweet = Retweet.new
        @og_tweet = Tweet.find(params[:tweet_id])
    end

    def create
        @retweet = Retweet.create(retweeter_id: current_user.id, tweet_id: params[:tweet_id])
        @retweet.update_attributes(content: Tweet.find(@retweet.tweet_id).content)
        if (params[:content])
            #change to update as a tweet comment, not content
           #@retweet.update_column(content: params[:content])
        end
    end

    def destroy

    end
end
