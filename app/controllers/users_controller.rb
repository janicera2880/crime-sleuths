class UsersController < ApplicationController
    skip_before_action :authorize, only: [:create, :index], raise: false

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
        # byebug
          user = User.find_by(id: session[:user_id])
          if user
            render json: user
          else
            render json: { error: "Not authorized" }, status: :unauthorized
        end
    end
  
    
      private
    
      def user_params
        params.permit(:username, :password, :password_confirmation)
      end
    
    end