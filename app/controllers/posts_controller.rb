class PostsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    #GET /posts
    def index
        posts = Post.all.includes(:user)
        render json: posts, include: ['user']
      end
      
    # GET /posts/:id
    def show
        post = Post.find(params[:id])
        render json: post, include: ['user']
    end

end
