class RegistrationsController < Devise::RegistrationsController
    protected
  
    def after_sign_up_path_for(resource)
      '/users/sign_in' # Or :prefix_to_your_route
    end
    
    def sign_up(resource_name, resource)
      #override devise's registration controller sign_up method, which signs in
    end
end