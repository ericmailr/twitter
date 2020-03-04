class Tweet < ApplicationRecord
    belongs_to :tweeter, class_name: "User"
    has_many :comments, as: :post
    has_many :likes, as: :post
    has_many :retweets, as: :post
end