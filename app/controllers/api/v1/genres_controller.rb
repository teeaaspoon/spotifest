module Api::V1
  class GenresController < ApplicationController
    before_action :set_artist

    # GET /genres
    def index
      render json: @artist.genres
    end

    private
      def set_artist
        @artist = Artist.find params[:artist_id]
      end

  end
end