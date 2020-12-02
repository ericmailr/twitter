class RemoveCommentFromQuoteTweets < ActiveRecord::Migration[6.0]
  def change
    remove_column :quote_tweets, :comment, :string
  end
end
