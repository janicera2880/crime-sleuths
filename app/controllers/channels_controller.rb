class ChannelsController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
  skip_before_action :authorize, only: [:index, :show, :channel_posts]

  # GET /channels
  def index
    channels = Channel.all.order(:id)
    render json: channels, include: ['posts', 'posts.user']
  end

  # GET /channels/:id
  def show
    channel = find_channel
    render json: channel, include: ['posts', 'posts.user']
  end

  # POST /channels
  def create
    channel = Channel.create!(channel_params)
    render json: channel, status: :created
  end

  #LIVE CODING
  def channel_posts
  n = params[:n].to_i
  channels = Channel.joins(:posts).group(:id).having('COUNT(posts.id) >=?', n)
  render json: channels
  end
  
  private
  
  # Strong parameters for channel creation
  def channel_params
    params.permit(:name, :description)
  end

  # Find channel by ID
  def find_channel
    Channel.find(params[:id])
  end

# Render a JSON response for "Channel Not Found" error
  def render_not_found_response
    render json: { error: 'Channel Not Found' }, status: :not_found
  end
end
