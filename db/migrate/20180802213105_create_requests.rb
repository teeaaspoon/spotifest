class CreateRequests < ActiveRecord::Migration[5.1]
  def change
    create_table :requests do |t|
      t.string :festival_name

      t.timestamps
    end
  end
end
