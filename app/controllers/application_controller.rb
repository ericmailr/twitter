class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  before_action :configure_permitted_parameters, if: :devise_controller?
  #helper_method makes current_user method available for use in view/
  #helper_method :current_user

#  def current_user
#    if session[:user_id]
#      @current_user ||= User.find(session[:user_id])
#    else
#      @current_user = nil
#    end
#  end
  protected

  def configure_permitted_parameters
    added_attrs = [:username, :email, :password, :password_confirmation, :remember_me]
    devise_parameter_sanitizer.permit :sign_up, keys: added_attrs
    devise_parameter_sanitizer.permit :sign_in, keys: [:login, :password]
    devise_parameter_sanitizer.permit :account_update, keys: added_attrs
  end

end
