class Comment < ApplicationRecord
    belongs_to :commenter, class_name: "User"
    belongs_to :post, polymorphic: true
    has_many :likes, as: :post
    has_many :retweets, as: :post
end
