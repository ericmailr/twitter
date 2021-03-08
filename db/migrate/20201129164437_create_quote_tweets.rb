class CreateQuoteTweets < ActiveRecord::Migration[6.0]
  def change
    create_table :quote_tweets do |t|
      t.integer :quote_tweeter_id
      t.integer :tweet_id
      t.text :quote
      t.text :comment

      t.timestamps
    end
  end
end
