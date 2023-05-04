Rails.application.routes.draw do
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  # get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

  resources :channels, only: [:index, :show, :create] do
    # Nested resource for posts
    # By adding the do...end we can pass it a block of its nested routes.
    resources :posts
  end

  resources :users, only: [:index, :show :update]
  post "/signup", to: "users#create"
  post "/login", to: "sessions#create"
  get "/me", to: "users#show"
  delete "/logout", to: "sessions#destroy"
end
