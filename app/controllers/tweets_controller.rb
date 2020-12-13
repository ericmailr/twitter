class TweetsController < ApplicationController
    include ApplicationHelper
    def new
        @tweet = Tweet.new
        if (params[:parent_id])
            @parent_id = params[:parent_id]
            @tweet.parent = Tweet.find(params[:parent_id])
        end
    end

    def create
        @tweet = Tweet.create(content: tweet_params[:content], user_id: current_user.id)
        if (params[:parent_id])
            @tweet.update_attributes(parent_id: params[:parent_id])
            redirect_to status_path(@tweet.parent.user.handle, @tweet.parent.id)
        else
            redirect_to root_path
        end
    end

    def show
        @tweet = Tweet.find(params[:id])
        respond_to do |format|
            format.json do
                msg = { :status => "ok", :message => "Success!", :likesCount => @tweet.likes.count }
                render :json => msg
            end
            format.html {  }
        end
    end

    def index
        if (current_user) 
            @tweet = Tweet.new
            @posts = Post.where(user_id: current_user.followed_users.map {|u| u.id}).order(updated_at: :desc).to_a
            parents_already_posted = []
            @posts.map! do |post|
                postHash = {:postType => post.class.name.downcase, :updatedAt => tweet_updated_at_formatted_brief(post.updated_at)}
                if post.class.name == "Like"
                    postHash[:post] = LikeSerializer.new(post)
                elsif parents_already_posted.include?(post.parent) || parents_already_posted.include?(post)
                    postHash = nil
                else
                    postHash[:post] = TweetSerializer.new(post)
                    postHash[:isLiked] = post.likers.include?(current_user)
                    postHash[:isRetweeted] = post.retweeters.include?(current_user)
                    if post.parent
                        parents_already_posted << post.parent
                        postHash[:parent] = TweetSerializer.new(post.parent)
                        postHash[:parentUpdatedAt] = tweet_updated_at_formatted_brief(post.parent.updated_at)
                        postHash[:isParentLiked] = post.parent.likers.include?(current_user)
                        postHash[:isParentRetweeted] = post.parent.retweeters.include?(current_user)
                        postHash[:postType] = "reply"
                    end
                end
                if ["Like", "Retweet", "QuoteTweet"].include?(post.class.name)
                    postHash[:quoted_tweet] = TweetSerializer.new(post.tweet)  
                end
                postHash
           end.compact!
        else
            redirect_to login_path
        end
    end

    private

        def tweet_params
           params.require(:tweet).permit(:content) 
        end
end
