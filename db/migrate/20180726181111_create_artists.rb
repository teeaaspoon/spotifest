class CreateArtists < ActiveRecord::Migration[5.1]
  def change
    create_table :artists do |t|
      t.string :artist_name
      t.jsonb :spotify_artist_info

      t.timestamps
    end
  end
end
