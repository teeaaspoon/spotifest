class CreateSpotifies < ActiveRecord::Migration[5.1]
  def change
    create_table :spotifies do |t|
      t.jsonb :user_info

      t.timestamps
    end
  end
end
