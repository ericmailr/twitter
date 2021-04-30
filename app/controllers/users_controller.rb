class UsersController < ApplicationController
    include ApplicationHelper
    before_action :authenticate_user! #, only: :show
=begin
    def new
        @user = User.new
    end

    def create
        User.create user_params
        if (User.find_by(username: user_params[:username])) 
            flash[:notice] = "Signed up! You may now log in."
            redirect_to login_path
        else 
            flash[:alert] = "Failed to sign up."
            redirect_to signup_path
        end
    end
=end

    def show
        @main_content_type = "Profile"
        @user = User.find_by!(handle: params[:handle])
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
        #api_key = "243252674515468"
        #api_secret = "rxaZrsPJmyR1GTvNlfV6g-uxn0k"
       #@uploadSignature = Cloudinary::Utils.sign_request({:public_id=>"my_image", :timestamp=>Time.now.to_i}, :options=>{:api_key=>api_key, :api_secret=>api_secret})


        respond_to do |format|
            format.json do
                msg = { :status => "ok", :message => "Success!" }
                render :json => msg
            end
            format.html {  }
        end

    end

    def index
        @users = User.followable_users(current_user).map{|user| {:user => user, :postType => "user"}}
    end

    def update
        #update avatar_public_id
        user = User.find(params[:id])
        if (user.avatar_public_id != "default_avatar") 
            Cloudinary::Uploader.destroy(user.avatar_public_id)
        end
        user.update(avatar_public_id: params[:avatar_public_id])
         respond_to do |format|
            format.json do
                msg = { :status => "ok", :message => "Success!" }
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
