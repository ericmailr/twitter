class CreateRetweets < ActiveRecord::Migration[5.1]
  def change
    create_table :retweets do |t|
      t.string :post_type
      t.integer :post_id

      t.timestamps
    end
  end
end
