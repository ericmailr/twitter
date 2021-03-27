class PostSerializer < ActiveModel::Serializer
  attributes :id, :updated_at, :user, :tweet 
  
  def user
    return UserSerializer.new(object.user)
  end

end