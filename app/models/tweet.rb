class Tweet < ApplicationRecord
    validates :content, :tweeter_id, presence: true

    belongs_to :tweeter, class_name: "User"
    has_many :comments, as: :post, dependent: :destroy
    has_many :likes, as: :post, dependent: :destroy
    has_many :retweets, as: :post, dependent: :destroy

    def Tweet.search(query)
        query = query.downcase
        Tweet.where("content like ?", "%#{query}%")
    end
end