class Like < ApplicationRecord
    validates :liker_id, presence: true
    belongs_to :liker, class_name: "User"
end
