class Like < ApplicationRecord
    validates :liker_id, :post_type, :post_id, presence: true
    belongs_to :liker, class_name: "User"
    belongs_to :post, polymorphic: true
end
