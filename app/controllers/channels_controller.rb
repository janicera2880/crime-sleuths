class ChannelsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    skip_before_action :authorize, only: [:index]

# GET ALL /channels
    def index
        channel = Channel.all
        render json: channel, include: ['posts']
    end

# POST create post
    def create
        channel = Channel.create!(channel_params)
        render json: channel, status: :created
    end

# SHOW display a specific channel
    def show
        channel = Channel.find(params[:id])
        render json: channel, include: ['posts', 'posts.user']
    end
  
    private 

    def channel_params
        params.permit(:name, :description)
    end

    def render_not_found_response
        render json: { error: "Channel Not Found" }, status: :not_found
    end

end