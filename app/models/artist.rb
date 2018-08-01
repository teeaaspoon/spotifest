class Artist < ApplicationRecord
    has_many :songs
    has_and_belongs_to_many :festivals
    has_and_belongs_to_many :genres

    validates :artist_name, presence:true
    validates :spotify_artist_id, presence:true
    validates :spotify_artist_info, presence:true
end
