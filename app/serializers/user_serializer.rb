class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :handle, :name, :followers, :followed_users, :tweetCount 
  
  def tweetCount
    return object.tweets.length()
  end
end