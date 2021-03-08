class CreateLikes < ActiveRecord::Migration[5.1]
  def change
    create_table :likes do |t|
      t.integer :liker_id
      t.text :post_type
      t.integer :post_id

      t.timestamps
    end
  end
end
