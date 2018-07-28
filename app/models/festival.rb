class Festival < ApplicationRecord
    has_and_belongs_to_many :artists

    validates :title, presence:true
    validates :start_date, presence:true
    validates :end_date, presence:true
    validates :city, presence:true
    validates :country, presence:true
end
