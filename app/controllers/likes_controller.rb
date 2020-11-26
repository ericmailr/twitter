class LikesController < ApplicationController

    #Just do all this in Tweets controller?
    def create
        @like = Like.find_by(liker_id: current_user.id, tweet_id: params[:tweet_id])
        #if (!@like)  
            Like.create(liker_id: current_user.id, tweet_id: params[:tweet_id])
        #else
        #    Like.destroy(@like.id)
        #end
        respond_to do |format|
            msg = { :status => "ok", :message => "Success!", :likesCount => Tweet.find(params[:tweet_id]).likes.count }
            format.json  { render :json => msg } 
        end
    end

    def destroy
      Like.destroy(params[:id])
    end
end
