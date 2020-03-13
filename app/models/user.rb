class User < ApplicationRecord
    validates :email, :handle, :username, uniqueness: true, presence: true

    has_secure_password

    has_many :tweets, foreign_key: :tweeter_id, dependent: :destroy
    
    has_many :received_follows, foreign_key: :followed_user_id, class_name: "Follow", dependent: :destroy
    has_many :followers, through: :received_follows
    has_many :given_follows, foreign_key: :follower_id, class_name: "Follow", dependent: :destroy
    has_many :followed_users, through: :given_follows
    has_many :likes, foreign_key: :liker_id, dependent: :destroy

    before_create :create_remember_token
    scope :followable_users, ->(user) { where.not(id: (user.followed_users + [user]).map(&:id))}

    def User.new_remember_token
        SecureRandom.urlsafe_base64
    end

    def User.digest(token)
        Digest::SHA1.hexdigest(token.to_s)
    end

    def User.search(query)
        query = query.downcase
        User.where("username like :q or handle like :q or name like :q", :q => "%#{query}%")
    end

    private

        def create_remember_token
            self.remember_token = User.digest(User.new_remember_token)
        end

end
