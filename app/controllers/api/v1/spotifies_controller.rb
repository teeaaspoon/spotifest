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
      @spotify_user.email = @spotify_user.user_info['email']
      if @spotify_user.save
        return
      else
        @old_user = Spotify.find_by_email(@spotify_user.email)
      end
    end

    def destroy
      @spotify_user.destroy
    end

  end
end