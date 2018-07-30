class Spotify < ApplicationRecord
  validates :email, uniqueness: true
end
