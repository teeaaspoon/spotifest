module Api::V1
  class SpotifiesController < ApplicationController

    def index
      @spotify_users = Spotify.all
      render json: @spotify_users
    end

    def login
      user_info = RSpotify::User.new(request.env['omniauth.auth'])
      redirect_to action: 'create', param: user_info
    end

    def show
      render json: @spotify_user
    end

    def create
      @spotify_users = Spotify.all
      @spotify_user = Spotify.new(user_info: params[:param])
      @spotify_user.save
    end

    def destroy
      @spotify_user.destroy
    end

  end
end