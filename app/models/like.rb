class Like < ApplicationRecord
    validates :liker_id, :tweet_id, presence: true
    validates :liker_id, uniqueness: { scope: :tweet_id }
    belongs_to :liker, class_name: "User"
    belongs_to :tweet
end
