class AddColumnsToFestivals < ActiveRecord::Migration[5.1]
  def change
    add_column :festivals, :longitude, :integer
    add_column :festivals, :latitude, :integer
    add_column :festivals, :continent, :string
  end
end
