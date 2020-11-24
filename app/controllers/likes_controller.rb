class LikesController < ApplicationController

    def create
        Like.create(liker_id: current_user.id, tweet_id: params[:tweet_id])
        respond_to do |format|
            msg = { :status => "ok", :message => "Success!", :likesCount => Tweet.find(params[:tweet_id]).likes.count }
            format.json  { render :json => msg } 
          end
    end

    def destroy

    end
end
