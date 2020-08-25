class LikesController < ApplicationController
    def create
        Like.create(liker_id: current_user.id, tweet_id: params[:tweet_id])
    end

    def destroy

    end
end
