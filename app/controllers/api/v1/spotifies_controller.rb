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
      @playlist = @spotify_user.create_playlist!(params[:playlistTitle])
      binding.pry
    end

    def destroy
      @spotify_user.destroy
    end

  end
end