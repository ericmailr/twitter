class CreatePosts < ActiveRecord::Migration[6.0]
  def change
    create_table :posts do |t|
      t.text :content
      t.integer :user_id
      t.text :ancestry
      t.integer :quote_id
      t.text :type

      t.timestamps
    end
    add_index :posts, :ancestry
  end
end
