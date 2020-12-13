class LikesController < ApplicationController

    def create
        @like = Like.find_by(user_id: current_user.id, quote_id: params[:quote_id])
        if (!@like)  
            Like.create(user_id: current_user.id, quote_id: params[:quote_id])
        end
        respond_to do |format|
            msg = { :status => "ok", :message => "Liked. Success!", :likesCount => Tweet.find(params[:quote_id]).likes.count }
            format.json  { render :json => msg } 
        end
    end

    def destroy
        @like = Like.find_by(user_id: current_user.id, quote_id: params[:id])
        if (@like)
            Like.destroy(@like.id)
        end
        respond_to do |format|
            msg = { :status => "ok", :message => "Unliked. Success!", :likesCount => Tweet.find(params[:id]).likes.count }
            format.json  { render :json => msg } 
        end
    end
end
