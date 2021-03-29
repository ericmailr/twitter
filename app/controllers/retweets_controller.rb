class RetweetsController < ApplicationController
    before_action :authenticate_user!

    #instance variables: @retweet, @og_tweet, etc
    def new
        @retweet = Retweet.new
        @og_tweet = Tweet.find(params[:quote_id])
    end

    def create
        @retweet = Retweet.create(user_id: current_user.id, quote_id: retweet_params[:quote_id], content: Tweet.find(retweet_params[:quote_id]).content)
        respond_to do |format|
            msg = { :status => "ok", :message => "Retweeted. Success!", :retweetsCount => Tweet.find(retweet_params[:quote_id]).retweets.count }
            format.json  { render :json => msg } 
        end
    end

    def destroy
        @retweet = Retweet.find_by(user_id: current_user.id, quote_id: retweet_params[:quote_id])
        if (@retweet)
            Retweet.destroy(@retweet.id)
        end
        respond_to do |format|
            msg = { :status => "ok", :message => "Retweet undone. Success!", :retweetsCount => Tweet.find(params[:id]).retweets.count }
            format.json  { render :json => msg } 
        end
    end

    private
        def retweet_params
           params.require(:retweet).permit(:content, :quote_id) 
        end

end
