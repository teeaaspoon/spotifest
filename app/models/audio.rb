class Audio < ApplicationRecord
  belongs_to :song, optional: true
  validates :features, uniqueness: true
end
