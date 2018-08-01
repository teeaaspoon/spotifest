class Playlist < ApplicationRecord
  belongs_to :spotify
  has_and_belongs_to_many :songs
end
