class UsersController < ApplicationController
    include ApplicationHelper
    before_action :authenticate_user! #, only: :show

    def show
        @user = User.find_by(handle: params[:handle])
        if (@user == nil) 
            redirect_to root_path
        else
            @main_content_type = "Profile"
            @content_type = params[:content_type]
            tweets = @user.tweets + @user.retweets + @user.quote_tweets + @user.likes
            posts = tweets.sort_by(&:updated_at).reverse.to_a
            already_included, tweets, with_replies, likes = [], [], [], []
            posts.each do |post|
                postHash = {postType: post.class.name.downcase}
                if post.class.name == "Tweet"
                    if post.parent && !already_included.include?(post.parent)
                        postHash[:parent] = TweetSerializer.new(post.parent)
                        postHash[:post] = TweetSerializer.new(post)
                        postHash[:postType] = 'reply'
                        with_replies << postHash
                        already_included << post.parent
                    elsif !post.parent && !already_included.include?(post)
                        postHash[:post] = TweetSerializer.new(post)
                        tweets << postHash
                        with_replies << postHash
                        already_included << post
                    end
                elsif ["Retweet", "QuoteTweet", "Like"].include?(post.class.name) && !already_included.include?(post.tweet)
                    postHash[:post] = PostSerializer.new(post)
                    postHash[:quoted_tweet] = TweetSerializer.new(post.tweet)
                    if post.class.name == "Like"
                        likes << postHash
                    else
                        tweets << postHash
                        with_replies << postHash
                        already_included << post
                    end
                end
            end
            @content = {tweets: tweets, with_replies: with_replies, media: nil, likes: likes}
            respond_to do |format|
                format.json do
                    msg = { :status => "ok", :message => "Success!" }
                    render :json => msg
                end
                format.html {  }
            end
        end

    end

    def index
        @users = User.followable_users(current_user).map{|user| {:user => user, :postType => "user"}}
    end

    def update
        user = User.find(params[:id])
        if (user.avatar_public_id != "default_avatar") 
            Cloudinary::Uploader.destroy(user.avatar_public_id)
        end
        user.update(avatar_public_id: params[:avatar_public_id])
         respond_to do |format|
            format.json do
                msg = { :status => "ok", :message => "Success! avatar_public_id updated." }
                render :json => msg
            end
            format.html {  }
        end       
    end


    private

        def user_params
            params.require(:user).permit(:name, :email, :birthday, :username, :handle, :password)
        end
end
