class CreateSongs < ActiveRecord::Migration[5.1]
  def change
    create_table :songs do |t|
      t.string :song_name
      t.jsonb :spotify_song_info

      t.timestamps
    end
  end
end
