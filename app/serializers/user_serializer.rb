class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :handle, :name 
end