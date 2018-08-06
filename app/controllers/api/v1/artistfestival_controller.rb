module Api::V1
    class ArtistfestivalController < ApplicationController
        def create
            @festival_id = parse_string(params[:festival])
            @artists_id = map_artist_id(params[:artists])
            
            @festival = Festival.find @festival_id

            @artists_id.each do |id|
                @artist = Artist.find id
                @festival.artists.push @artist
                @festival.save
            end
        

            if @festival.artists.length === @artists_id.length
                render json: @festival
            end
        end

        private 
        def parse_string(string) 
            string.split(":::")[1].to_i
        end

        def map_artist_id(artists)
            artists.map! {|artist| parse_string(artist) }
        end

    end
end