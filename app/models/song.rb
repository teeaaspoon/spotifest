class Song < ApplicationRecord
    belongs_to :artist

    validates :song_name, presence:true
    validates :spotify_uri, presence:true
    validates :spotify_song_info, presence:true
end
