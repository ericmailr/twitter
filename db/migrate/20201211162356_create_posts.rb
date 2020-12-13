class CreatePosts < ActiveRecord::Migration[6.0]
  def change
    create_table :posts do |t|
      t.string :content
      t.integer :user_id
      t.string :ancestry
      t.integer :quote_id
      t.string :type

      t.timestamps
    end
    add_index :posts, :ancestry
  end
end
