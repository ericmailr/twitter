class UsersController < ApplicationController
    def new
        @user = User.new
    end

    def create
        User.create! user_params
        if (User.find_by(username: user_params[:username])) 
            redirect_to home_path
        else 
            flash[:alert] = "Failed to create user"
        end
    end

    def show
    end

    private

        def user_params
            params.require(:user).permit(:name, :email, :birthday, :username, :password)
        end
end
