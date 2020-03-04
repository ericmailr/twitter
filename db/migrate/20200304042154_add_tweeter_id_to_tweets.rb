class AddTweeterIdToTweets < ActiveRecord::Migration[5.1]
  def change
    add_column :tweets, :tweeter_id, :integer
  end
end
