class Spotify < ApplicationRecord
  validates :spotify_id, uniqueness: true
end
