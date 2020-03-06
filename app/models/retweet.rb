class Retweet < ApplicationRecord
    validates :retweeter_id, :post_type, :post_id, presence: true
    
    belongs_to :post, polymorphic: true
    has_many :comments, as: :post, dependent: :destroy
    has_many :likes, as: :post, dependent: :destroy
end
