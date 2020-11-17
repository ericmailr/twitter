class RetweetsController < ApplicationController
    #instance variables: @retweet, @og_tweet, etc
    def new
        @retweet = Retweet.new
        @og_tweet = Tweet.find(params[:tweet_id])
    end

    def create
        @retweet = Retweet.create(retweeter_id: current_user.id, tweet_id: retweet_params[:tweet_id])
        @retweet.update_attributes(content: Tweet.find(@retweet.tweet_id).content)
        #need to add tweet_content, tweet_updated_at, tweeter_username, tweeter_id, tweeter_handle columns to retweet
        #OR WAIT: can I access the og tweet of the retweet via associations? YES!

        if (retweet_params[:comment])
          @retweet.update_attributes(comment: retweet_params[:comment])
        end
    end

    def destroy

    end

    private
        def retweet_params
           params.require(:retweet).permit(:comment, :tweet_id) 
        end

end
