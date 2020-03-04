class User < ApplicationRecord
    has_many :tweets
    has_many :received_follows, foreign_key: :followed_user_id, class_name: "Follow"
    has_many :followers, through: :received_follows
    has_many :given_follows, foreign_key: :follower_id, class_name: "Follow"
    has_many :followed_users, through: :given_follows
    has_many :likes, foreign_key: :liker_id
end
