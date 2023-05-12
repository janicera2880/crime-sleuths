class UsersController < ApplicationController
  before_action :authorize, except: [:create, :index]


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
      render json: { error: "User Not Found" }, status: :not_found
    end
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
        if user.update(update_params)
          render json: user, status: :ok
        else
          render json: user.errors, status: :unprocessable_entity
        end
      end
    

      private
    
      def user_params
        params.permit(:username, :password, :password_confirmation, :image_url, :bio, :location)
      end

      def find_user
        User.find(params[:id])
      end
      def update_params
        params.require(:user).permit(:id, :username, :location, :bio)
      end
      def authorize
        unless session[:user_id]
          render json: { error: 'Unauthorized' }, status: :unauthorized
        end
      end
    end