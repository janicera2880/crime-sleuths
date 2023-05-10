class ChannelsController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
  skip_before_action :authorize, only: [:index, :show]

  # GET /channels
  def index
    channels = Channel.all.order(:id)
    render json: channels, include: ['posts', 'posts.user']
  end

  # SHOW display a specific /channels/:id
  def show
    channel = find_channel
    render json: channel, include: ['posts', 'posts.user']
  end

  # POST create Channel
  def create
    channel = Channel.create!(channel_params)
    render json: channel, status: :created
  end

  private

  def channel_params
    params.permit(:name, :description)
  end

  def find_channel
    Channel.find(params[:id])
  end


  def render_not_found_response
    render json: { error: 'Channel Not Found' }, status: :not_found
  end
end
