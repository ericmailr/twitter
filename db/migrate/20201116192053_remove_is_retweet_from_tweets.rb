class RemoveIsRetweetFromTweets < ActiveRecord::Migration[6.0]
  def change
    remove_column :tweets, :is_retweet, :boolean
  end
end
