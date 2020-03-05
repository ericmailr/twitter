class SessionsController < ApplicationController
  def new
  end

  def create
    user = User.find_by(username: params[:username])
    if user && user.authenticate(params[:password])
      session[:user_id] = user.id
      redirect_to root_path
    else
      flash.now[:alert] = "Username or password is invalid."
      render "new"
    end
  end

  def destroy
    flash[:notice] = "Logged out!"
    redirect_to login_path
  end
end
