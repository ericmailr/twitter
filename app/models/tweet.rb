class Tweet < Post

    has_ancestry
    has_many :likes, class_name: "Like", foreign_key: :quote_id, dependent: :destroy
    has_many :retweets, class_name: "Retweet", foreign_key: :quote_id, dependent: :destroy
    has_many :quote_tweets, class_name: "QuoteTweet", foreign_key: :quote_id, dependent: :destroy
    has_many :likers, class_name: "User", foreign_key: :quote_id, through: :likes, source: :user
    has_many :retweeters, class_name: "User", foreign_key: :quote_id, through: :retweets, source: :user
    has_many :quote_tweeters, class_name: "User", foreign_key: :quote_id, through: :quote_tweets, source: :user

    def Tweet.search(query)
        query = query.downcase
        Tweet.where("content like ?", "%#{query}%")
    end
end