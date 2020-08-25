class AddTweetIdToLikes < ActiveRecord::Migration[5.1]
  def change
    add_column :likes, :tweet_id, :integer
  end
end
