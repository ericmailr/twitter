class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :handle, :name, :followers, :followed_users, :tweetCount, :avatar_public_id
  
  def tweetCount
    return object.tweets.length()
  end
  
  def followed_users
    return object.followed_users.map {|user| {id: user.id, username: user.username, handle: user.handle, name: user.name}}
  end

  def followers
    return object.followers.map {|user| {id: user.id, username: user.username, handle: user.handle, name: user.name}}
  end

end