class AddAvatarUrlToUsers < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :avatar_url, :string, :default => "https://res.cloudinary.com/hr0v6dg24/image/upload/v1619577391/dvujg4xnse5bk99syt4f.png"
  end
end
