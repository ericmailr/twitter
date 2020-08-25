class RemovePostTypeFromLikes < ActiveRecord::Migration[5.1]
  def change
    remove_column :likes, :post_type, :string
  end
end
