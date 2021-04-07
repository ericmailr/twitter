class SessionsController < ApplicationController
  def new
    #put this in a #before_action in all necessary controllers?
    if current_user && User.digest(cookies.permanent[:remember_token]) == current_user.remember_token
      redirect_to root_path
    end
  end

  def create
    user = User.find_by(username: params[:username])
    if user && user.authenticate(params[:password])
      session[:user_id] = user.id
      remember_token = User.new_remember_token
      cookies.permanent[:remember_token] = remember_token
      user.update_attribute(:remember_token, User.digest(remember_token))
      redirect_to root_path
    else
      flash.now[:alert] = "The username and password you entered did not match our records. Please double-check and try again."
      render "new"
    end
  end

  def destroy
    flash.now[:notice] = "Logged out!"
    cookies.permanent[:remember_token] = nil
    session[:user_id] = nil
    redirect_to login_path
  end
end
