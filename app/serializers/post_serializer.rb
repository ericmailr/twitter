class PostSerializer < ActiveModel::Serializer
  attributes :id, :user 
  attribute :tweet, if: :tweet?
  
  def tweet?
  end
end