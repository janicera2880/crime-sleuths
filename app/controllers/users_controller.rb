class UsersController < ApplicationController
  #skip_before_action :authorize, only: [:create, :index]


    # GET ALL Users
    def index
        users = User.all
        render json: users
    end

    def show
      user = find_user
      if user
        render json: user, status: :ok
      else
        render json: {error: "Not logged in"}, status: :unauthorized
      end
      rescue ActiveRecord::RecordNotFound
        render json: {error: "User Not Found"}, status: :not_found
    end
      
    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        if user.valid?
          render json: user, status: :created
        else
          render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
        end
      end
    
      
    def update
      user = find_user
      user.update!(update_params)
      render json: user, status: :accepted
    rescue ActiveRecord::RecordInvalid => error
      render json: {errors: error.record.errors}
  end

      private
    
      def user_params
        params.permit(:username, :password, :password_confirmation, :image_url, :bio, :location)
      end

      def find_user
        User.find(params[:id])
      end
      def update_params
        params.permit(:username, :location, :bio)
      end  
    
  end