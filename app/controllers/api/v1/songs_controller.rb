module Api::V1
  class SongsController < ApplicationController
    before_action :set_song, only: [:show, :update, :destroy]
    before_action :set_artist

    # GET /songs
    def index
      @songs = Song.all

      render json: @songs
    end

    # GET /songs/1
    def show
      render json: @song
    end

    # POST /songs
    def create
      @songs = []
      @tracks = RSpotify::Track.search("artist:#{@artist.artist_name}", limit: 10)
      @tracks.each do |track|
        if Song.find_by spotify_uri: track.uri
          @songs << "existing song, don't add to db"  
        else
          @song = @artist.songs.new({song_name: track.name, spotify_uri: track.uri, spotify_song_info: track})
          if @song.save
            @songs << @song  
          end
        end
      end

      if @songs.length == @tracks.length
        render json: @songs, status: :created
      else
        render json: @song.errors, status: :unprocessable_entity
      end
    end

    # PATCH/PUT /songs/1
    def update
      if @song.update(song_params)
        render json: @song
      else
        render json: @song.errors, status: :unprocessable_entity
      end
    end

    # DELETE /songs/1
    def destroy
      @song.destroy
    end

    private
      # Use callbacks to share common setup or constraints between actions.
      def set_song
        @song = Song.find(params[:id])
      end

      # Only allow a trusted parameter "white list" through.
      def song_params
        params.require(:song).permit(:song_name, :spotify_song_info, :spotify_uri)
      end

      def set_artist
        @artist = Artist.find_by(id: params[:artist_id])
      end

  end
end