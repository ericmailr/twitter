class TweetSerializer < ActiveModel::Serializer
  attributes :id, :content, :updated_at, :children, :tweeter, :retweets, :likes
end