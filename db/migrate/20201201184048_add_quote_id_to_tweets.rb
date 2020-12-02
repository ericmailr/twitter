class AddQuoteIdToTweets < ActiveRecord::Migration[6.0]
  def change
    add_column :tweets, :quote_id, :integer
  end
end
