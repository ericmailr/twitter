class AddTypeToTweets < ActiveRecord::Migration[6.0]
  def change
    add_column :tweets, :type, :string
  end
end
