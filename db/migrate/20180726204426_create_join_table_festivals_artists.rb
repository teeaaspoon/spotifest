class CreateJoinTableFestivalsArtists < ActiveRecord::Migration[5.1]
  def change
    create_join_table :festivals, :artists do |t|
      # t.index [:festival_id, :artist_id]
      # t.index [:artist_id, :festival_id]
    end
  end
end
