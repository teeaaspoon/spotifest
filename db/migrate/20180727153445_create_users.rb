class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.jsonb :spotify_user_info

      t.timestamps
    end
  end
end
