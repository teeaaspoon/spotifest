module Api::V1
  class SpotifiesController < ApplicationController

    CLIENT_ID = "61949ea347f344009e8b87b0e5606c8c"
    CLIENT_SECRET = "1158d8503dae4dcb86cacf4bf62904aa"
    ENCRYPTION_SECRET = "cFJLyifeUJUBFWdHzVbykfDmPHtLKLGzViHW9aHGmyTLD8hGXC"
    CLIENT_CALLBACK_URL = "spotifest://spotify"
    AUTH_HEADER = "Basic " + Base64.strict_encode64(CLIENT_ID + ":" + CLIENT_SECRET)
    SPOTIFY_ACCOUNTS_ENDPOINT = URI.parse("https://accounts.spotify.com")

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
        @old_user.refresh = refresh_info
        @old_user.user_info = user_info.to_hash
        @old_user.save
        token = encode_token({userId: @old_user.spotify_id, admin: @old_user.admin})
        binding.pry
        redirect_to "http://localhost:3000/?token=#{token}"
      end
    end

    def ios_login
       headers = {
        "Accept"  => "application/json",
        "Content-Type" => "application/json",
        "Authorization" => "Bearer #{params[:accessToken]}"
       }

      result = HTTParty.get(
        "https://api.spotify.com/v1/me",
        :headers => headers
        )
      @old_user = Spotify.find_by(spotify_id: result["id"])
      @old_user.user_info["credentials"]["token"] = params[:accessToken]
      @old_user.user_info["credentials"]["refresh_token"] = params[:refreshToken]
      @old_user.user_info["credentials"]["expires_at"] = params[:expirationDate]
      @old_user.save
      render json: @old_user.spotify_id
    end

    def show
      render json: @spotify_user
    end


    def create_spotify_playlist
      get_user
      @festival = Festival.find params[:festival][:id]
      @playlist = @RSpotify_user.create_playlist!(params[:playlistTitle])
      @new_playlist = @spotify_user.playlists.create!(spotify_playlist_info: @playlist, name: params[:playlistTitle])
      # find all artists with params given
      @artists = params[:artistsSelected].map { |artist| Artist.find artist[:id] }
      # this will add all songs to the playlist
      @songs = []
      @artists.each do |artist|
        @songs << RSpotify::Track.search("artist:#{artist.artist_name}", limit: params[:numberOfSongs])
      end
      @songs.uniq!
      @songs.flatten!
      add_tracks_to_spotify_playlist(@playlist, @songs)
      add_songs_to_playlist_object(@new_playlist, @songs)
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
      get_user
      @playlists = @spotify_user.playlists
      render json: @playlists
    end

    def destroy
      @spotify_user.destroy
    end

    def delete_playlist
      @playlist = Playlist.find(params[:playlistId])
      @playlist.destroy
    end

    def token_swap
      auth_code = params[:code]

      http = Net::HTTP.new(SPOTIFY_ACCOUNTS_ENDPOINT.host, SPOTIFY_ACCOUNTS_ENDPOINT.port)
      http.use_ssl = true

      request = Net::HTTP::Post.new("/api/token")

      request.add_field("Authorization", AUTH_HEADER)

      request.form_data = {
          "grant_type" => "authorization_code",
          "redirect_uri" => CLIENT_CALLBACK_URL,
          "code" => auth_code
      }

      response = http.request(request)
      # encrypt the refresh token before forwarding to the client
      if response.code.to_i == 200
          token_data = JSON.parse(response.body)
          refresh_token = token_data["refresh_token"]
          response.body = JSON.dump(token_data)
      end
      render json: response.body
    end

    private

    def add_tracks_to_spotify_playlist(playlist, tracks)
      tracks = tracks.each_slice(100).to_a
      tracks.each do |array|
        track_uris = array.map {|track| track.uri}.join(",")
        url = playlist.instance_variable_get(:@href) + "/tracks?uris=#{track_uris}"
        RSpotify::User.oauth_post(playlist.instance_variable_get(:@owner).id, url, {})
      end
    end

    def add_songs_to_playlist_object(playlist, tracks)
      tracks.each do |track|
        if Song.find_by spotify_uri: track.uri
          playlist.songs << Song.find_by(spotify_uri: track.uri)
        else
          new_song = Song.create!(spotify_uri: track.uri, song_name: track.name)
          track_id = track.uri.split("track:")[1]
          playlist.songs << new_song
        end
      end
    end

    def get_user
      @spotify_user_id = params[:userId]
      @spotify_user = Spotify.find_by(spotify_id: @spotify_user_id)
      binding.pry
      @RSpotify_user = RSpotify::User.new(@spotify_user.user_info)
    end

    def encode_token(payload={})
      exp = 100.days.from_now
      payload[:exp] = exp.to_i
      JWT.encode(payload, Rails.application.secrets.secret_key_base)
    end
  end
end