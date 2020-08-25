class AddContentToRetweets < ActiveRecord::Migration[5.1]
  def change
    add_column :retweets, :content, :string
  end
end
