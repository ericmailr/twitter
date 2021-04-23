class PostsController < ApplicationController
  before_action :authenticate_user!
  def index
    @main_content_type = "Home"
    if (current_user) 
        tweets = Tweet.includes(:likers, :retweeters).where(user_id: (current_user.followed_users).map {|u| u.id}).to_a + current_user.tweets.to_a
        likes = Like.where(user_id: current_user.followed_users.map {|u| u.id}).to_a
        retweets = Retweet.where(user_id: current_user.followed_users.map {|u| u.id}).to_a
        quote_tweets = QuoteTweet.where(user_id: current_user.followed_users.map {|u| u.id}).to_a
        posts = (tweets + likes + retweets + quote_tweets).sort_by {|post| post.updated_at}.reverse
        already_included, posts_hashes = [], []
        posts.each do |post|
            postHash = {:postType => post.class.name.downcase}
            if post.class.name == "Tweet" && !already_included.include?(post) && !already_included.include?(post.parent)
                if post.parent
                    postHash[:parent] = TweetSerializer.new(post.parent)
                    postHash[:postType] = 'reply'
                    already_included << post.parent
                end
                postHash[:post] = TweetSerializer.new(post)
                already_included << post
                posts_hashes << postHash
            elsif ["Retweet", "QuoteTweet", "Like"].include?(post.class.name) && !already_included.include?(post.tweet)
                postHash[:post] = PostSerializer.new(post)
                postHash[:quoted_tweet] = TweetSerializer.new(post.tweet)
                posts_hashes << postHash
                already_included << post.tweet
            end
        end
       @content = {posts: posts_hashes}

        respond_to do |format|
            format.json do
                msg = { :status => "ok", :message => "Success!", :content => @content }
                render :json => msg
            end
            format.html {  }
        end
    else
        redirect_to login_path
    end

  end
end
