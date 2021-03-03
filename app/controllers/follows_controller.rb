class FollowsController < ApplicationController
    def create
        @user = User.find(params[:followed_user_id])
        Follow.create(follower_id: current_user.id, followed_user_id: @user.id)
        respond_to do |format|
            msg = { :status => "ok", :isFollowed => current_user.followed_users.include?(@user)}
            format.json  { render :json => msg } 
        end

    end

    def index
        @follow_type = params[:follow_type]
        @user = User.find_by(handle: params[:handle])
        respond_to do |format|
            format.json do 
                msg = { :status => "ok", :isFollowed => current_user.followed_users.include?(@user) }
                render :json => msg  
            end
            format.html {  }
        end

    end

    def destroy
        @user = User.find(params[:followed_user_id])
        Follow.find_by!(followed_user_id: params[:followed_user_id], follower_id: current_user.id).destroy
        respond_to do |format|
            msg = { :status => "ok", :isFollowed => current_user.followed_users.include?(@user)}
            format.json  { render :json => msg } 
            format.html {}
        end

    end
end
