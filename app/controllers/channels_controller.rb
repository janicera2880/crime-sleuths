class ChannelsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    #skip_before_action :authorize, only: :index

# GET /channels
    def index
        render json: Channel.all.order(:id)
    end

# POST create Channel
    def create
        channel = @current_user.channel.create!(channel_params)
        render json: channel, status: :created
    end

# SHOW display a specific /channels/:id
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