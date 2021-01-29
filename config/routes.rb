Rails.application.routes.draw do
  root to: 'pages#index'

  # Sign up
  get "/signup", to: "users#new"
  get "/user", to: "users#index"
  post "/signup", to: "users#create"

  # Login and Logout
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  # Polls
  resources :polls, only: [:create, :index, :show]
  
  get "*path", to: "pages#index", via: :all
end
