class UsersController < ApplicationController
  # before_action is used to call the authorize method before executing any action
  # except for create and index
  before_action :authorize, except: [:create, :index]


    # Get ALL Users '/users'
    def index
        users = User.all
        render json: users
    end

    # GET /me
    # finds a specific user based on the params[:id] parameter
    def show
      user = find_user
      if user
        render json: user, status: :ok
      else
        render json: { error: "User Not Found" }, status: :not_found
      end
    end
     
    # creates a new user with the parameters passed in user_params
    def create
      user = User.create!(user_params)
      session[:user_id] = user.id
      if user.valid?
        render json: user, status: :created
      else
        render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
      end
    end
    
    # updates the user's attributes using the parameters specified in update_params
    def update
      user = find_user
      if user.update(update_params)
        render json: user, status: :ok
      else
        render json: user.errors, status: :unprocessable_entity
        end
    end
    

      private
      # specifies the permitted parameters for user creation
      def user_params
        params.permit(:username, :password, :password_confirmation, :image_url, :bio, :location)
      end

      # finds a user based on the params[:id]
      def find_user
        User.find(params[:id])
      end

      # specifies the permitted parameters for updating a user
      def update_params
        params.require(:user).permit(:id, :username, :location, :bio)
      end

      # checks if a user is authorized by verifying the presence of session[:user_id]
      def authorize
        unless session[:user_id]
          render json: { error: 'Unauthorized' }, status: :unauthorized
        end
      end
    end