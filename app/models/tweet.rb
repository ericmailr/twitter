class Tweet < ApplicationRecord
    validates :tweeter_id, presence: true
    
    has_ancestry
    belongs_to :tweeter, class_name: "User"
    has_many :likes, dependent: :destroy
    has_many :likers, class_name: "User", through: :likes
    has_many :retweets, class_name: "Retweet", foreign_key: "quote_id", dependent: :destroy
    has_many :quote_tweets, class_name: "QuoteTweet", foreign_key: "quote_id", dependent: :destroy

    def Tweet.search(query)
        query = query.downcase
        Tweet.where("content like ?", "%#{query}%")
    end
end