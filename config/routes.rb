Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root to: "tweets#index"


  resources :users, only: [:new, :create, :show, :destroy]
  resources :sessions, only: [:new, :create, :destroy]
  resources :follows, only: [:create, :destroy]
  resources :tweets, only: [:new]
  resources :likes, only: [:create, :destroy]
  resources :retweets, only: [:new, :create, :destroy]

  #as: defines *_path and *_url
  get ":handle/following", to: "follows#index", defaults: {follow_type: "following"}, as: "following"
  get ":handle/followers", to: "follows#index", defaults: {follow_type: "followers"}, as: "followers"

  get "tweets", to: "tweets#index", as: "tweets"
  post "tweets", to: "tweets#create"
  get "signup", to: "users#new", as: "signup"
  get "login", to: "sessions#new", as: "login"
  delete "logout", to: "sessions#destroy", as: "logout"
  get "home", to: "tweets#index", as: "home"
  get "search", to: "search#index", as: "search"

  get ":handle", to: "users#show", as: "profile"
  get ":handle/status/:id", to: "tweets#show", as: "status"
end
