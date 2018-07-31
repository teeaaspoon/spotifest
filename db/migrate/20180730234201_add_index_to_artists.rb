class AddIndexToArtists < ActiveRecord::Migration[5.1]
  def change
    add_index :artists, :spotify_artist_id unless index_exists?(:artists, :spotify_artist_id)
  end
end
