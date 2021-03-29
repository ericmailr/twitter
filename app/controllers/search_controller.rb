class SearchController < ApplicationController
    before_action :authenticate_user!

    def index
        @user_results = User.search(params[:query])
        @tweet_results = Tweet.search(params[:query])
    end
end
