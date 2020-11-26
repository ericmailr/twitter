class Retweet < ApplicationRecord
    validates :retweeter_id, presence: true
    
    has_ancestry
    belongs_to :tweet
    belongs_to :retweeter, class_name: "User"
    #probably remove 
    has_many :retweets, dependent: :destroy
    has_many :tweets, dependent: :destroy
    #probably remove 
    has_many :likes, dependent: :destroy
end
