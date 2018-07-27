class CreateFestivals < ActiveRecord::Migration[5.1]
  def change
    create_table :festivals do |t|
      t.string :title
      t.string :start_date
      t.string :end_date
      t.string :city
      t.string :country
      t.string :artists

      t.timestamps
    end
  end
end
