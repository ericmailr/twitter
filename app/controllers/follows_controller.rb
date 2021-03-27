class FollowsController < ApplicationController
    def create
        @user = User.find(params[:followed_user_id])
        follow = Follow.create(follower_id: current_user.id, followed_user_id: @user.id)
        respond_to do |format|
            msg = { :status => "ok", :isFollowed => current_user.followed_users.include?(@user)}
            format.json  { render :json => msg } 
        end
    end

    def index
        @content_type = params[:content_type]
        @user = User.find_by(handle: params[:handle])
        followed_users = @user.followed_users.select{|user| user != current_user}.to_a.map!{ |user| {:user => user, :postType => "user"}}
        followers = @user.followers.select{|user| user != current_user}.to_a.map!{|user| {:user => user, :postType => "user"}}
        followers_user_follows = (current_user.followed_users & @user.followers).to_a.map!{|user| {:user => user, :postType => "user"}}
        @content = {following: followed_users, followers: followers, followers_you_know: followers_user_follows}
        respond_to do |format|
            format.json do 
                msg = { :status => "ok", :isFollowed => current_user.followed_users.include?(@user) }
                render :json => msg  
            end
            format.html { }
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
