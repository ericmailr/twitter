class SearchController < ApplicationController
    def index
        @user_results = User.search(params[:query])
    end
end
