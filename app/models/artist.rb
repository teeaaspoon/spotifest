class Artist < ApplicationRecord
    has_many :songs
    has_and_belongs_to_many :festivals
end
