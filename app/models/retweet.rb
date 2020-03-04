class Retweet < ApplicationRecord
    belongs_to :post, polymorphic: true
    has_many :comments, as: :post
    has_many :likes, as: :post
end
