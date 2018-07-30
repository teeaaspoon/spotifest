module Api::V1
  class SpotifiesController < ApplicationController

    def index
      @spotify_users = Spotify.all
      render json: @spotify_users
    end

    def login
      user_info = RSpotify::User.new(request.env['omniauth.auth'])
      hash = user_info.to_hash
      binding.pry
      redirect_to action: 'create', param: hash
    end

    def show
      render json: @spotify_user
    end

    def create
      @spotify_user = Spotify.new(user_info: params[:param])
      @spotify_user.save
    end

    def create_playlist
      @myAccount = Spotify.all.last
      @spotify_user = RSpotify::User.new(@myAccount.user_info)
      @festival = Festival.find params[:festival][:id]
      @playlist = @spotify_user.create_playlist!(params[:playlistTitle])
      # find all tracks by artists
      @artists = @festival.artists
      # this will add all songs to the playlist
      @artists.each { |artist| add_tracks_to_playlist(@playlist, artist.songs) }
      render json: @playlist
    end

    def destroy
      @spotify_user.destroy
    end

    private
    def add_tracks_to_playlist(playlist, tracks)
      track_uris = tracks.map {|track| track.spotify_uri}.join(",")
      url = playlist.instance_variable_get(:@href) + "/tracks?uris=#{track_uris}"
      RSpotify::User.oauth_post(playlist.instance_variable_get(:@owner).id, url, {})
      tracks
    end

  end
end