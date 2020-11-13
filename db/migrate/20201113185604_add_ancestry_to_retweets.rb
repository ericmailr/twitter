class AddAncestryToRetweets < ActiveRecord::Migration[6.0]
  def change
    add_column :retweets, :ancestry, :string
    add_index :retweets, :ancestry
  end
end
