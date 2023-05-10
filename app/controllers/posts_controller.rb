class PostsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    before_action :authorize
    skip_before_action :authorize, only: [:index, :show]
    
    # GET
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

    # POST
    def create
        user = find_user
        new_post = user.posts.create!(post_params)
        render json: new_post, status: :created 
    rescue ActiveRecord::RecordInvalid => e
        render json: {errors: e.record.errors}, status: :unprocessable_entity
    end

    # PATCH
    def update
        post = find_post
        post.update!(post_params)
        render json: post, status: :ok
    end

    # DELETE
    def destroy
        post = find_post
        if post.user_id == session[:user_id]
            review.destroy
            render json: review, status: 200
          else
            render json: { error: "You are not authorized to delete this review" }, status: :unauthorized
          end
        end

    private 

    def post_params
        params.permit(:title, :image, :content, :channel_id, :user_id)
    end

    def find_post 
        Post.find(params[:id])
    end 

    def find_user
        User.find(session[:user_id])

    end

    def authorize
        render json: {error: "Not authorized"}, status: :unauthorized unless session.include? :user_id
    end

    def render_not_found_response
        render json: {error: "Record not found"}, status: :not_found
    end

end
