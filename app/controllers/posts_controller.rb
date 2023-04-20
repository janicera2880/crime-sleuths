class PostsController < ApplicationController
    
    # GET /posts
    def index
        posts = Post.all
        render json: posts
      end
      
    # GET /posts/:id
    def show
        post = Post.find(params[:id])
        render json: post
    end

    # POST
    def create
        post = @current_user.posts.create!(post_params)
        render json: post, status: :created 
    end

    def update
        post = find_post
        if  post.user === @current_user
            post.update!(post_params)
            render json: post, status: :created 
        else render json: {error: "User is not valid"}
        end
    end

    def destroy
        post = find_post
        post.destroy
        head :no_content
    end

    private 

    def post_params
        params.permit(:title, :image, :content, :channel_id, :user_id)
    end

    def find_post 
        Post.find(params[:id])
    end 

end
