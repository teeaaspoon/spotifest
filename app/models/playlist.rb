class Playlist < ApplicationRecord
  belongs_to :spotify, optional: true
  has_and_belongs_to_many :songs
end
