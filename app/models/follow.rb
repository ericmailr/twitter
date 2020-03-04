class Follow < ApplicationRecord
    validates :follower_id, :followed_user_id, presence: true

    belongs_to :follower, class_name: "User"
    belongs_to :followed_user, class_name: "User"
end
