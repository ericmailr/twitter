class RemovePostTypeFromRetweets < ActiveRecord::Migration[5.1]
  def change
    remove_column :retweets, :post_type, :integer
  end
end
