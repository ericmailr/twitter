class SearchController < ApplicationController
    def index
        @user_results = User.search(params[:query])
        @tweet_results = Tweet.search(params[:query])
    end
end
