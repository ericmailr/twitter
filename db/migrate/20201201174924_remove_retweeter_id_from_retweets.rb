class RemoveRetweeterIdFromRetweets < ActiveRecord::Migration[6.0]
  def change
    remove_column :retweets, :retweeter_id, :integer
  end
end
