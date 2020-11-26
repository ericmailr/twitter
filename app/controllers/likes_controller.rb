class LikesController < ApplicationController

    def create
        @like = Like.find_by(liker_id: current_user.id, tweet_id: params[:tweet_id])
        if (!@like)  
            Like.create(liker_id: current_user.id, tweet_id: params[:tweet_id])
        end
        respond_to do |format|
            msg = { :status => "ok", :message => "Liked. Success!", :likesCount => Tweet.find(params[:tweet_id]).likes.count }
            format.json  { render :json => msg } 
        end
    end

    def destroy
        @like = Like.find_by(liker_id: current_user.id, tweet_id: params[:id])
        if (@like)
            Like.destroy(@like.id)
        end
        respond_to do |format|
            msg = { :status => "ok", :message => "Unliked. Success!", :likesCount => Tweet.find(params[:id]).likes.count }
            format.json  { render :json => msg } 
        end
    end
end
