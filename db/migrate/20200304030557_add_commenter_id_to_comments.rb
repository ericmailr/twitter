class AddCommenterIdToComments < ActiveRecord::Migration[5.1]
  def change
    add_column :comments, :commenter_id, :integer
  end
end
