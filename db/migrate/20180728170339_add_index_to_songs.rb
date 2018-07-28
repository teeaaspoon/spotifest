class AddIndexToSongs < ActiveRecord::Migration[5.1]
  def change
    add_index :songs, :spotify_uri
  end
end
