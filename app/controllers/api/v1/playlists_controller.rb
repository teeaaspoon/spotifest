module Api::V1
  class PlaylistsController < ApplicationController
    before_action :set_playlist

    def destroy
      @playlist.destroy
    end

    private
    def set_playlist
      binding.pry
      @playlist = Playlist.find(params[:id])
    end
  end
end

