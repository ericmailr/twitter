class TweetSerializer < ActiveModel::Serializer
  attributes :id, :content, :updated_at, :children, :user, :retweets, :likes, :quote_tweets
end