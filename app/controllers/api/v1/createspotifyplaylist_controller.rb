module Api::V1
    class CreatespotifyplaylistController < ApplicationController
        def create
            spotify_user = RSpotify::User.new(request.env['omniauth.auth'])
            binding.pry
            @user = RSpotify::User.find('22m5mfhnq3qde4wp5ulpdjkny')
            @playlist_title = params[:playlistTitle]
            @playlist_description = params[:playlistDescription]
        end
    end
end