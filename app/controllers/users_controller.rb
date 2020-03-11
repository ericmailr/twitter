class UsersController < ApplicationController
    def new
        @user = User.new
    end

    def create
        User.create user_params
        if (User.find_by(username: user_params[:username])) 
            flash[:notice] = "Signed up! You may now log in."
            redirect_to login_path
        else 
            flash[:alert] = "Failed to sign up."
            redirect_to signup_path
        end
    end

    def show
        @user = User.find_by!(handle: params[:handle])
    end

    private

        def user_params
            params.require(:user).permit(:name, :email, :birthday, :username, :handle, :password)
        end
end
