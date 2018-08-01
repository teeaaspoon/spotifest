class AddNameToPlaylists < ActiveRecord::Migration[5.1]
  def change
    add_column :playlists, :name, :string
  end
end
