class AddSpotifyArtistIdToArtists < ActiveRecord::Migration[5.1]
  def change
    add_column :artists, :spotify_artist_id, :string
  end
end
