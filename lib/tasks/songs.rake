desc "Grabbing audio features for tracks"
task audio_grab: :environment do
  @songs = Song.all
  @song_ids = []
  @songs.each do |song|
    @song_ids << song.spotify_song_info['id']
  end
  @song_ids.uniq!
  @song_ids = @song_ids.each_slice(100).to_a
  @audio_features = []
  @song_ids.each do |array|
    @audio_features << RSpotify::AudioFeatures.find(array)
  end
  @audio_features.flatten!
  @audio_features.uniq!
  @audio_features.each do |spotify_audio|
    unless !spotify_audio || !spotify_audio.uri
      song = Song.find_by(spotify_uri: spotify_audio.uri)
      song.audio = Audio.create!(features: spotify_audio)
    end
  end
end
