class CreateComments < ActiveRecord::Migration[5.1]
  def change
    create_table :comments do |t|
      t.string :content
      t.string :post_type
      t.integer :post_id

      t.timestamps
    end
  end
end
