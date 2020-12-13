class LikeSerializer < ActiveModel::Serializer
  attributes :id, :updated_at, :user, :tweet 
end