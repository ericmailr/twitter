class TweetSerializer < ActiveModel::Serializer
    # Attributes we want to see in our JSON
    attributes :id, :content, :updated_at, :children, :tweeter, :retweets, :likes
    
  end