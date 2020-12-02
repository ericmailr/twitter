class RemoveQuoteTweeterIdFromQuoteTweets < ActiveRecord::Migration[6.0]
  def change
    remove_column :quote_tweets, :quote_tweeter_id, :integer
  end
end
