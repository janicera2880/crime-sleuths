class SessionsController < ApplicationController
    #Use class method to skip the authorize filter only on the create action
    skip_before_action :authorize, only: :create
  
    #POST /login
    #Create method would look up a user in the database
    #Verify their login credentials, and then store the authenticated user's id
    def create
      user = User.find_by(username: params[:username])
      if user&.authenticate(params[:password])
        session[:user_id] = user.id
        render json: user, status: :ok
      else
        render json: { error: ["Invalid Username or Password"] }, status: :unauthorized
      end
    end
    
    # DELETE action Logout User
    def destroy
      session.delete :user_id
      head :no_content
    end
end