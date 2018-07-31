class ChangeDataTypeForFestivalLongLat < ActiveRecord::Migration[5.1]
  def change
    change_column :festivals, :longitude, :float
    change_column :festivals, :latitude, :float
  end
end
