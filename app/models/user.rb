class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
    validates :email, :handle, :username, uniqueness: { case_sensitive: false }, presence: true
    validates_format_of :username, with: /^[a-zA-Z0-9_\. ]*$/, :multiline => true #so username can't have @ and potentially be someone else's email

    has_many :tweets, dependent: :destroy
    has_many :retweets, dependent: :destroy
    has_many :quote_tweets, dependent: :destroy
    has_many :received_follows, foreign_key: :followed_user_id, class_name: "Follow", dependent: :destroy
    has_many :followers, through: :received_follows
    has_many :given_follows, foreign_key: :follower_id, class_name: "Follow", dependent: :destroy
    has_many :followed_users, through: :given_follows
    has_many :likes, dependent: :destroy
    
    attr_writer :login

    #before_create :create_remember_token
    scope :followable_users, ->(user) { where.not(id: (user.followed_users + [user]).map(&:id))}

    def login
        @login || self.username || self.email
    end
    
    def self.find_for_database_authentication(warden_conditions)
        conditions = warden_conditions.dup
        if login = conditions.delete(:login)
          where(conditions.to_h).where(["lower(username) = :value OR lower(email) = :value", { :value => login.downcase }]).first
        elsif conditions.has_key?(:username) || conditions.has_key?(:email)
            #added this line for email case insensitive. right place?
          conditions[:email].downcase! if conditions[:email]
          where(conditions.to_h).first
        end
    end

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
