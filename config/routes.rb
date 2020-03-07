Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: "tweets#index"

  resources :users, only: [:new, :create, :show, :destroy]
  resources :sessions, only: [:new, :create, :destroy]
  resources :follows, only: [:create, :destroy]

  #as: defines *_path and *_url
  get "tweets", to: "tweets#index", as: "tweets"
  post "tweets", to: "tweets#create"
  get "signup", to: "users#new", as: "signup"
  get "login", to: "sessions#new", as: "login"
  get "logout", to: "sessions#destroy", as: "logout"
  get "home", to: "tweets#index", as: "home"
  get "search", to: "search#index", as: "search"
end
