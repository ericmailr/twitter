class CommentsController < ApplicationController
  def new
    @comment = Comment.new
  end

  def create

  end

  def show
    @comment = Comment.find(params[:id])
  end

  def index
    if params[:id]
      @tweet = Tweet.find(params[:id])
    end
  end
end
