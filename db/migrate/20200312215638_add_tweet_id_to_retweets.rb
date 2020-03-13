class AddTweetIdToRetweets < ActiveRecord::Migration[5.1]
  def change
    add_column :retweets, :tweet_id, :integer
  end
end
