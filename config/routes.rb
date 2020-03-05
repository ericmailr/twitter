Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: "tweets#index"

  resources :users
  resources :sessions, only: [:new, :create, :destroy]

  /as: defines *_path and *_url/
  get "login", to: "sessions#new", as: "login"
  get "logout", to: "sessions#destroy", as: "logout"
end
