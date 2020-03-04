class AddAuthorIdToTweets < ActiveRecord::Migration[5.1]
  def change
    add_column :tweets, :author_id, :integer
  end
end
