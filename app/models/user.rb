class User < ApplicationRecord
    validates :email, :username, uniqueness: true, presence: true

    has_secure_password

    has_many :tweets, foreign_key: :tweeter_id, dependent: :destroy
    has_many :retweets, foreign_key: :retweeter_id, dependent: :destroy
    has_many :comments, foreign_key: :commenter_id, dependent: :destroy
    
    has_many :received_follows, foreign_key: :followed_user_id, class_name: "Follow", dependent: :destroy
    has_many :followers, through: :received_follows
    has_many :given_follows, foreign_key: :follower_id, class_name: "Follow", dependent: :destroy
    has_many :followed_users, through: :given_follows
    has_many :likes, foreign_key: :liker_id, dependent: :destroy

    before_create :create_remember_token

    def User.new_remember_token
        SecureRandom.urlsafe_base64
    end

    def User.digest(token)
        Digest::SHA1.hexdigest(token.to_s)
    end

    private

        def create_remember_token
            self.remember_token = User.digest(User.new_remember_token)
        end

end
