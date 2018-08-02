class CreateAudios < ActiveRecord::Migration[5.1]
  def change
    create_table :audios do |t|
      t.jsonb :features
      t.references :song, foreign_key: true

      t.timestamps
    end
  end
end
