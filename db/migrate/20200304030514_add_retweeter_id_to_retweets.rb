class AddRetweeterIdToRetweets < ActiveRecord::Migration[5.1]
  def change
    add_column :retweets, :retweeter_id, :integer
  end
end
