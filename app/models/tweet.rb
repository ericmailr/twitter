class Tweet < ApplicationRecord
    validates :content, :tweeter_id, presence: true
    
    has_ancestry
    belongs_to :tweeter, class_name: "User"
    has_many :tweets, dependent: :destroy
    has_many :likes, dependent: :destroy
    has_many :likers, class_name: "User", through: :likes
    has_many :retweets, dependent: :destroy


    def Tweet.search(query)
        query = query.downcase
        Tweet.where("content like ?", "%#{query}%")
    end
end