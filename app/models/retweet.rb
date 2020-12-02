class Retweet < Tweet
    validates :tweeter_id, presence: true
    
    belongs_to :tweet, foreign_key: "quote_id"

end
