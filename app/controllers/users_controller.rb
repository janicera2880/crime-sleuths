class UsersController < ApplicationController
  skip_before_action :authorize, only: [:create, :index, :update], raise: false


    # GET ALL Users
    def index
        users = User.all
        render json: users
    end
      
    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end
    
    def show
        render json: @current_user
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
    
    end