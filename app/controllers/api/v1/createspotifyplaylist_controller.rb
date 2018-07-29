module Api::V1
    class CreatespotifyplaylistController < ApplicationController
        def create
            binding.pry
            @playlist_title = params[:playlistTitle]
            @playlist_description = params[:playlistDescription]
        end
    end
end