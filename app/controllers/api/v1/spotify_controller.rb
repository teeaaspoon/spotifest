class SpotifyController < ApplicationController
  def login
    spotify_user = RSpotify::User.new(request.env['omniauth.auth'])
  end

end
