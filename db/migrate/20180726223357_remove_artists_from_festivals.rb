class RemoveArtistsFromFestivals < ActiveRecord::Migration[5.1]
  def change
    remove_column :festivals, :artists, :string
  end
end
