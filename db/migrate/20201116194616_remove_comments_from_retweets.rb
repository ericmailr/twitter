class RemoveCommentsFromRetweets < ActiveRecord::Migration[6.0]
  def change
    remove_column :retweets, :comment, :string
  end
end
