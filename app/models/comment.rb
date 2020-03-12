class Comment < ApplicationRecord
    validates :content, :post_type, :post_id, :commenter_id, presence: true

    belongs_to :commenter, class_name: "User"
    belongs_to :post, polymorphic: true
    has_ancestry
    has_many :likes, as: :post, dependent: :destroy
    has_many :retweets, as: :post, dependent: :destroy
    has_many :comments, as: :post, dependent: :destroy
end
