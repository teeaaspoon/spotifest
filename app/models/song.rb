class Song < ApplicationRecord
  belongs_to :artist
  has_and_belongs_to_many :playlists
  has_one :audio

  validates :song_name, presence:true
  validates :spotify_uri, presence:true
  # validates :spotify_song_info, presence:true

  # def update_top_songs
  #   artists = Artist.all
  #   artists.each do |artist|
  #     artist.songs.each do |song|
  #       song.
  #     tracks = RSpotify::Track.search("artist:#{artist.artist_name}", limit: 10)
  #     tracks.each do |track|
  #       unless Song.find_by spotify_uri: track.uri
  #         song = artist.songs.new({song_name: track.name, spotify_uri: track.uri})
  #         track_id = track.uri.split("track:")[1]
  #         audio_feature = RSpotify::AudioFeatures.find(track_id)
  #         if audio_feature && audio_feature.uri
  #           song.audio = Audio.create!(features: audio_feature)
  #         end
  #         song.save
  #       end
  #     end
  #   end
  # end
end
