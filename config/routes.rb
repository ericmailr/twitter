Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  #root to: "posts#index"
  authenticated :user do
    root to: 'posts#index', as: :authenticated_root
  end
  root to: redirect('/users/sign_in')

  resources :users, only: [:show, :destroy]
  resources :follows, only: [:create]
  resources :tweets, only: [:new, :show]
  resources :likes, only: [:create, :destroy]
  resources :retweets, only: [:new, :create, :destroy]

  #as: defines *_path and *_url
  get ":handle/following", to: "follows#index", defaults: {content_type: "following"}, as: "following"
  get ":handle/followers", to: "follows#index", defaults: {content_type: "followers"}, as: "followers"
  get ":handle/followers_you_know", to: "follows#index", defaults: {content_type: "followers_you_know"}, as: "followers_you_know"

  get "home", to: "posts#index", as: "home"
  post "tweets", to: "tweets#create"
  #get "signup", to: "users#new", as: "signup"
  get "search", to: "search#index", as: "search"
  
  delete "follows/:followed_user_id", to: "follows#destroy", as: "follow"
  
  get ":handle", to: "users#show", defaults: {content_type: "tweets"}, as: "profile"
  get ":handle/with_replies", to: "users#show", defaults: {content_type: "with_replies"}, as: "profile_with_replies"
  get ":handle/media", to: "users#show", defaults: {content_type: "media"}, as: "profile_media"
  get ":handle/likes", to: "users#show", defaults: {content_type: "likes"}, as: "profile_likes"

  get ":handle/status/:id", to: "tweets#show", as: "status"
end
