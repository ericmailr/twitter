class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  before_action :configure_permitted_parameters, if: :devise_controller?
  #https://github.com/heartcombo/devise/issues/2209, devise doesn't respond_to json requests by default
  respond_to :html, :json



# devise redirect to new session on sign_out
def after_sign_out_path_for(resource)
 session_path(resource)
end

  protected

  def configure_permitted_parameters
    added_attrs = [:name, :username, :handle, :email, :password, :password_confirmation, :remember_me]
    devise_parameter_sanitizer.permit :sign_up, keys: added_attrs
    devise_parameter_sanitizer.permit :sign_in, keys: [:login, :password]
    devise_parameter_sanitizer.permit :account_update, keys: added_attrs
  end

end
