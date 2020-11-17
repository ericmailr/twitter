class AddIsRetweetToTweets < ActiveRecord::Migration[6.0]
  def change
    add_column :tweets, :is_retweet, :boolean
  end
end
