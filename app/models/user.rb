class User < ApplicationRecord
    validates :email, :username, uniqueness: true, presence: true

    has_secure_password

    has_many :tweets, foreign_key: :tweeter_id
    has_many :retweets, foreign_key: :retweeter_id
    has_many :comments, foreign_key: :commenter_id
    
    has_many :received_follows, foreign_key: :followed_user_id, class_name: "Follow"
    has_many :followers, through: :received_follows
    has_many :given_follows, foreign_key: :follower_id, class_name: "Follow"
    has_many :followed_users, through: :given_follows
    has_many :likes, foreign_key: :liker_id

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
