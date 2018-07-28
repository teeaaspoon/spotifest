class Spotify < ApplicationRecord
  validates :user_info, uniqueness: true
end
