class RemoveAuthorIdFromTweets < ActiveRecord::Migration[6.0]
  def change
    remove_column :tweets, :author_id, :integer
  end
end
