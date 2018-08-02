module Api::V1
  class SpotifiesController < ApplicationController

    def index
      @spotify_users = Spotify.all
      render json: @spotify_users
    end


    def login
      user_info = RSpotify::User.new(request.env['omniauth.auth'])
      user_hash = user_info.to_hash
      redirect_to action: 'create_user', param: user_hash
    end

    def show
      render json: @spotify_user
    end

    def create_user
      @spotify_user = Spotify.new(user_info: params[:param])
      @spotify_user.spotify_id = @spotify_user.user_info['id']
      if @spotify_user.save
        redirect_to "http://localhost:3000/#{@spotify_user.user_info['id']}"
      else
        @old_user = Spotify.find_by(spotify_id: @spotify_user.spotify_id)
        redirect_to "http://localhost:3000/#{@old_user.user_info['id']}"
      end
    end

    def create_playlist
      @spotify_user_id = params[:spotifyUser]
      @spotify_user = Spotify.find_by(spotify_id: @spotify_user_id)
      @RSpotify_user = RSpotify::User.new(@spotify_user.user_info)
      @festival = Festival.find params[:festival][:id]
      @playlist = @RSpotify_user.create_playlist!(params[:playlistTitle])
      @new_playlist = @spotify_user.playlists.create!(spotify_playlist_info: @playlist, name: params[:playlistTitle])
      binding.pry
      # find all artists with params given
      @artists = params[:artistsSelected].map { |artist| Artist.find artist[:id] }
      # this will add all songs to the playlist
      @artists.each { |artist| add_tracks_to_playlist(@playlist, artist.songs.limit(params[:numberOfSongs])) }
      @artists.each { |artist| add_songs_to_playlist(@new_playlist, artist.songs.limit(params[:numberOfSongs])) }
      binding.pry
      render json: @playlist
    end

    def fetch_top_artists
      @spotify_user_id = params[:userId]
      @spotify_user = Spotify.find_by(spotify_id: @spotify_user_id)
      @RSpotify_user = RSpotify::User.new(@spotify_user.user_info)
      @top_artists = @RSpotify_user.top_artists
      # find festivals where those artists are in
      binding.pry
      render json: @top_artists
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
        binding.pry
      end
    end
  end
end