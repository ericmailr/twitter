class QuoteTweet < Tweet
    validates :tweeter_id, presence: true
    validates :tweeter_id, uniqueness: { scope: :quote_id }
    
    belongs_to :tweet, foreign_key: "quote_id"

end
