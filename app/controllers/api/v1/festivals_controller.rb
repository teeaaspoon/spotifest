module Api::V1
  class FestivalsController < ApplicationController
    before_action :set_festival, only: [:show, :update, :destroy]

    # GET /festivals
    def index
      @festivals = Festival.all

      render json: @festivals
    end

    # GET /festivals/1
    def show
      render json: @festival
    end

    # POST /festivals
    def create
      # check if already exists
      if Festival.find_by title: festival_params.title, start_date: festival_params.start_date
          render json: @festival.errors, status: :unprocessable_entity
          return
      else
        @festival = Festival.new(festival_params)
      end

      if @festival.save
        render json: @festival, status: :created
      else
        render json: @festival.errors, status: :unprocessable_entity
      end
    end

    # PATCH/PUT /festivals/1
    def update
      if @festival.update(festival_params)
        render json: @festival
      else
        render json: @festival.errors, status: :unprocessable_entity
      end
    end

    # DELETE /festivals/1
    def destroy
      @festival.destroy
    end

    private
      # Use callbacks to share common setup or constraints between actions.
      def set_festival
        @festival = Festival.find(params[:id])
      end

      # Only allow a trusted parameter "white list" through.
      def festival_params
        params.require(:festival).permit(:title, :start_date, :end_date, :city, :country)
      end
  end
end