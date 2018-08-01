class Spotify < ApplicationRecord
  validates :spotify_id, uniqueness: true
  has_many :playlists
end
