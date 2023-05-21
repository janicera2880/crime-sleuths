Rails.application.routes.draw do
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  # get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

  resources :channels, only: [:index, :show, :create] do
    # Nested resource for posts
    # By adding the do...end we can pass it a block of its nested routes.
    resources :posts
  end

  resources :users, only: [:index, :show, :update] do
    resources :posts, only: [:index, :update, :destroy]
  end
  
  resources :posts
  post "/signup", to: "users#create" #This route is used for creating a new user account.
  post "/login", to: "sessions#create" #This route is used for user login/authentication.
  get "/me", to: "users#show" #This route is used to retrieve the current user's information.
  delete "/logout", to: "sessions#destroy" #This route is used to logout user from session.
  
end
