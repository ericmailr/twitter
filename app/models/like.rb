class Like < Post
    validates :quote_id, presence: true
    validates :user_id, uniqueness: { scope: :quote_id }
    belongs_to :liker, class_name: "User", foreign_key: :user_id
    belongs_to :tweet, foreign_key: :quote_id
    
    def as_json(options={})
        super(:only => [:id, :tweet, :liker])
    end
end
