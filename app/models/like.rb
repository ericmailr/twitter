class Like < Tweet
    validates :tweeter_id, :quote_id, presence: true
    validates :tweeter_id, uniqueness: { scope: :quote_id }
    belongs_to :liker, class_name: "User", foreign_key: :tweeter_id
    belongs_to :tweet, foreign_key: :quote_id
end
