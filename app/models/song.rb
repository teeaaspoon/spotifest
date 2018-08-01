class Song < ApplicationRecord
    belongs_to :artist
    has_and_belongs_to_many :playlists

    validates :song_name, presence:true
    validates :spotify_uri, presence:true
    validates :spotify_song_info, presence:true
end
