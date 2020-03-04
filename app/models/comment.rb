class Comment < ApplicationRecord
    validates :content, :post_type, :post_id, :commenter_id, presence: true

    belongs_to :post, polymorphic: true
    has_ancestry
    has_many :likes, as: :post
    has_many :retweets, as: :post
    has_many :comments, as: :post
end
