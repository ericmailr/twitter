class RemovePostIdFromRetweets < ActiveRecord::Migration[5.1]
  def change
    remove_column :retweets, :post_id, :integer
  end
end
