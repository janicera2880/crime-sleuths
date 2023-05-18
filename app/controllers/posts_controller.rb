class PostsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
     # Run the authorize method before every action, except for index and show
    before_action :authorize
    skip_before_action :authorize, only: [:index, :show]
    
   # GET /posts
    def index
      if params[:user_id]
        user = find_user
        render json: user.posts.order(created_at: :desc), status: :ok
      else
        render json: Post.order(created_at: :desc), status: :ok
      end
    end
      
    # GET /posts/:id
    def show
        post = find_post
        render json: post, status: :ok
    end

    # POST /posts
    def create
        user = find_user
        if authorized_user?(user)
        new_post = user.posts.create!(post_params)
        render json: new_post, status: :created
    else
        render json: { error: "You are not authorized to create a post" }, status: :unauthorized
      end
    rescue ActiveRecord::RecordInvalid => e
      render json: { errors: e.record.errors }, status: :unprocessable_entity
    end

    # PATCH /posts/:id
    def update
        post = find_post
        if authorized_user?(post.user)
          post.update!(update_post_params)
          render json: post, status: :ok
        else
          render json: { error: "You are not authorized to update this post" }, status: :unauthorized
        end
      end

     # DELETE /posts/:id
    def destroy
      post = find_post
      if authorized_user?(post.user)
        post.destroy
        render json: post, status: 200
      else
        render json: { error: "You are not authorized to delete this post" }, status: :unauthorized
      end
    end

    private 

    # Strong parameters for creating a post
    def post_params
        params.permit(:title, :image, :content, :channel_id, :user_id)
    end
    
    # Find a post by its ID
    def find_post 
        Post.find(params[:id])
    end 

    # Find a user by the user_id stored in the session
    def find_user
        User.find(session[:user_id])
    end

    # Strong parameters for updating a post
    def update_post_params
      params.permit(:title, :content)
    end
    
    # Check if the user is authorized based on the session
    def authorize
        render json: { error: "Not authorized" }, status: :unauthorized unless session.include?(:user_id)
    end
    
    # Render a not found response
    def render_not_found_response
      render json: { error: "Record not found" }, status: :not_found
    end
    
    # Check if the given user is authorized based on the session
    def authorized_user?(user)
      user && user.id == session[:user_id]
    end
  end
