module Api::V1
  class SpotifiesController < ApplicationController

    def index
      @spotify_users = Spotify.all
      render json: @spotify_users
    end


    def login
      user_info = RSpotify::User.new(request.env['omniauth.auth'])
      user_hash = user_info.to_hash
      @spotify_user = Spotify.new(user_info: user_hash)
      @spotify_user.spotify_id = @spotify_user.user_info['id']
      token = encode_token({userId: @spotify_user.spotify_id})
      if @spotify_user.save
        redirect_to "http://localhost:3000/?token=#{token}"
      else
        @old_user = Spotify.find_by(spotify_id: @spotify_user.spotify_id)
        redirect_to "http://localhost:3000/?token=#{token}"
      end
    end

    def show
      render json: @spotify_user
    end


    def create_playlist
      binding.pry
      @spotify_user_id = params[:spotifyUser]
      @spotify_user = Spotify.find_by(spotify_id: @spotify_user_id)
      @RSpotify_user = RSpotify::User.new(@spotify_user.user_info)
      binding.pry
      @festival = Festival.find params[:festival][:id]
      @playlist = @RSpotify_user.create_playlist!(params[:playlistTitle])
      @new_playlist = @spotify_user.playlists.create!(spotify_playlist_info: @playlist, name: params[:playlistTitle])
      binding.pry
      # find all artists with params given
      @artists = params[:artistsSelected].map { |artist| Artist.find artist[:id] }
      binding.pry
      # this will add all songs to the playlist
      @artists.each { |artist| add_tracks_to_playlist(@playlist, artist.songs.limit(params[:numberOfSongs])) }
      binding.pry
      @artists.each { |artist| add_songs_to_playlist(@new_playlist, artist.songs.limit(params[:numberOfSongs])) }
      binding.pry
      render json: @playlist
    end

    def fetch_top_genres
      get_user
      @top_artists = @RSpotify_user.top_artists
      @genres = @top_artists.map {|artist| artist.genres }.flatten.uniq
      render json: @genres
    end

    def fetch_top_artists
      get_user
      @top_artists = @RSpotify_user.top_artists
      render json: @top_artists
    end

    def fetch_playlists
      @spotify_user_id = params[:userId]
      @spotify_user = Spotify.find_by(spotify_id: @spotify_user_id)
      @playlists = @spotify_user.playlists
      render json: @playlists
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

    def add_songs_to_playlist(playlist, tracks)
      tracks.each do |track|
        playlist.songs << track
      end
    end

    def get_user
      @spotify_user_id = params[:userId]
      @spotify_user = Spotify.find_by(spotify_id: @spotify_user_id)
      @RSpotify_user = RSpotify::User.new(@spotify_user.user_info)
    end

    def encode_token(payload={})
      exp = 100.days.from_now
      payload[:exp] = exp.to_i
      JWT.encode(payload, Rails.application.secrets.secret_key_base)
    end
  end
end