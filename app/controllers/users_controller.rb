class UsersController < ApplicationController
  skip_before_action :authorize, only: [:create, :index, :update]


    # GET ALL Users
    def index
        users = User.all
        render json: users
    end

    def show
      user = User.find(params[:id])
      render json: user, status: :ok
    rescue ActiveRecord::RecordNotFound
      render json: { error: 'User not found' }, status: :not_found
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
        params.permit(:username, :image_url, :location, :bio)
      end  
    
  end