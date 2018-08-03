module Api::V1
  class RequestsController < ApplicationController
    # GET /genres
    def index
      @requests = Request.all
      render json: @requests
    end

    def create
      # check if already exists
      if Request.find_by festival_name: request_params[:festival_name]
          render json: {"message": "already exists"}
          return
      else
        @request = Request.new(request_params)
        if @request.save
          render json: @request, status: :created
        else
          render json: @request.errors, status: :unprocessable_entity
        end
      end
    end

    def destroy
      @deleteRequest = Request.find params[:id]
      @deleteRequest.destroy
      render json: {"message": "deleted!"}
    end

    private
      def request_params
        params.require(:request).permit(:festival_name)
      end


  end
end