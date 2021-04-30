class AddAvatarPublicIdToUsers < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :avatar_public_id, :string, :default => "default_avatar"
  end
end
