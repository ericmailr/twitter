class CreateQuoteTweets < ActiveRecord::Migration[6.0]
  def change
    create_table :quote_tweets do |t|
      t.integer :quote_tweeter_id
      t.integer :tweet_id
      t.string :quote
      t.string :comment

      t.timestamps
    end
  end
end
