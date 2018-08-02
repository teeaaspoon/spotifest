class AddAudioFeaturesToSongs < ActiveRecord::Migration[5.1]
  def change
    add_column :songs, :audio_features, :jsonb
  end
end
