class QuoteTweet < ApplicationRecord
    validates :quote_tweeter_id, presence: true
    
    belongs_to :tweet
    belongs_to :quote_tweeter, class_name: "User"
    #probably remove 
    has_many :retweets, dependent: :destroy
    has_many :tweets, dependent: :destroy
    #probably remove 
    has_many :likes, dependent: :destroy

end
