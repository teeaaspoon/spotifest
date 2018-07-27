module Api::V1
  class ArtistsController < ApplicationController
    before_action :set_artist, only: [:show, :update, :destroy]

    # GET /artists
    def index
      @artists = Artist.all

      render json: @artists
    end

    # GET /artists/1
    def show
      render json: @artist
    end

    # POST /artists
    def create
      @spotify_artist = RSpotify::Artist.search(artist_params[:artist_name])[0]
      @artist = Artist.new({artist_name: @spotify_artist.name, spotify_artist_id: @spotify_artist.id, spotify_artist_info: @spotify_artist})
      if @artist.save
        render json: @artist, status: :created
      else
        render json: @artist.errors, status: :unprocessable_entity
      end
    end

    # PATCH/PUT /artists/1
    def update
      if @artist.update(artist_params)
        render json: @artist
      else
        render json: @artist.errors, status: :unprocessable_entity
      end
    end

    # DELETE /artists/1
    def destroy
      @artist.destroy
    end

    private
      # Use callbacks to share common setup or constraints between actions.
      def set_artist
        @artist = Artist.find(params[:id])
      end

      # Only allow a trusted parameter "white list" through.
      def artist_params
        params.require(:artist).permit(:artist_name)
      end
  end
end