class Retweet < Tweet
    validates :quote_id, presence: true
    validates :user_id, uniqueness: { scope: :quote_id }
    
    belongs_to :tweet, foreign_key: :quote_id

end
