Rails.application.routes.draw do
  post "/vote", to: 'votes#create'
  root to: 'pages#index'

  # Sign up
  get "/signup", to: "users#new"
  post "/signup", to: "users#create"
  
  # Login and Logout
  post "/login", to: "sessions#create"
  get "/user", to: "users#index"
  delete "/logout", to: "sessions#destroy"

  # Polls
  resources :polls, only: [:create, :index, :show]
  
  get "*path", to: "pages#index", via: :all
end
