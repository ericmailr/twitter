class FollowsController < ApplicationController
    def create
        Follow.create follower_id: current_user.id, followed_user_id: params[:followed_user_id]
    end

    def index
        @follow_type = params[:follow_type]
        @user = User.find_by(handle: params[:handle])
    end

    def destroy
        Follow.find_by!(followed_user_id: params[:followed_user_id], follower_id: params[:id]).destroy
    end
end
