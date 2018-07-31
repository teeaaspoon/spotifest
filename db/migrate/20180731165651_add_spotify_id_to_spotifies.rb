class AddSpotifyIdToSpotifies < ActiveRecord::Migration[5.1]
  def change
    add_column :spotifies, :spotify_id, :string
    add_index :spotifies, :spotify_id
  end
end
