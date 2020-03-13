class Retweet < ApplicationRecord
    validates :retweeter_id, presence: true
    
    belongs_to :tweet
    has_many :retweets, dependent: :destroy
    has_many :likes, dependent: :destroy
end
