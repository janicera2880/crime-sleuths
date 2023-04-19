class PostsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    #GET /posts
    def index
        posts = Post.all.includes(:user)
        render json: posts, include: :user
      end
    
      

end
