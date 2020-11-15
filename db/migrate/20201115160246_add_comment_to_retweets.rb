class AddCommentToRetweets < ActiveRecord::Migration[6.0]
  def change
    add_column :retweets, :comment, :string
  end
end
