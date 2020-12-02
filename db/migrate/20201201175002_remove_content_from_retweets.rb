class RemoveContentFromRetweets < ActiveRecord::Migration[6.0]
  def change
    remove_column :retweets, :content, :string
  end
end
