module Api::V1
  class ArtistsController < ApplicationController
    before_action :set_artist, only: [:show, :update, :destroy]

    # GET /artists
    def index
      if params[:festival_id]
        @festival = Festival.find params[:festival_id]
        @artists = @festival.artists
      elsif params[:genre_id]
        @genre = Genre.find params[:genre_id]
        @artists = @genre.artists
      else
        @artists = Artist.all
      end
      render json: @artists
    end

    # GET /artists/1
    def show
      render json: @artist
    end

    # POST /artists
    def create
      @spotify_artist = RSpotify::Artist.search(artist_params[:artist_name])[0]
      # check if that spotify artist is already in DB
      if Artist.find_by spotify_artist_id: @spotify_artist.id
        render json: @artist, status: :unprocessable_entity
        return
      else
        @artist = Artist.new({artist_name: @spotify_artist.name, spotify_artist_id: @spotify_artist.id, spotify_artist_info: @spotify_artist})
        @artist.spotify_artist_info['genres'].each do |genre|
          @search_genre = Genre.find_by(name: genre)
          if @search_genre
            @artist.genres << @search_genre
          else
            @genre = Genre.create!(name: genre)
            @artist.genres << @genre
          end
        end
      end

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