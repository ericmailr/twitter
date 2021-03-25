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
            @tweet.update(parent_id: params[:parent_id])
            #redirect_to status_path(@tweet.parent.user.handle, @tweet.parent.id)
        else
            #redirect_to root_path
        end
        #new
        respond_to do |format|
            msg = { :status => "ok", :message => "Tweeted. Success!" }
            format.json  { render :json => msg } 
        end
    end

    def show
        @main_content_type = "Tweet"
        @tweet = Tweet.find(params[:id])
        respond_to do |format|
            format.json do
                msg = { :status => "ok", :message => "Success!", :likesCount => @tweet.likes.count, :retweetsCount => @tweet.retweets.count }
                render :json => msg
            end
            format.html {  }
        end
    end

    def index
      @main_content_type = "Home"
        if (current_user) 
            tweets = Tweet.includes(:likers, :retweeters).where(user_id: (current_user.followed_users).map {|u| u.id}).to_a + current_user.tweets.to_a
            likes = Like.where(user_id: current_user.followed_users.map {|u| u.id}).to_a
            retweets = Retweet.where(user_id: current_user.followed_users.map {|u| u.id}).to_a
            quote_tweets = QuoteTweet.where(user_id: current_user.followed_users.map {|u| u.id}).to_a
            @posts = (tweets + likes + retweets + quote_tweets).sort_by {|post| post.updated_at}.reverse
            parents_already_posted = []
            @posts.map! do |post|
                postHash = {:postType => post.class.name.downcase, :updatedAt => tweet_updated_at_formatted_brief(post.updated_at)}
                if ["Like", "Retweet", "QuoteTweet"].include?(post.class.name) 
                  if parents_already_posted.include?(post.tweet)
                    postHash = nil
                  else
                    postHash[:post] = LikeSerializer.new(post)
                    postHash[:isLiked] = post.tweet.likers.include?(current_user)
                    postHash[:isRetweeted] = post.tweet.retweeters.include?(current_user)
                    postHash[:quoted_tweet] = TweetSerializer.new(post.tweet)  
                    parents_already_posted << post.tweet
                  end
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
