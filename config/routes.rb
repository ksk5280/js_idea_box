Rails.application.routes.draw do
  root 'ideas#index'

  resources :users, only: [:new, :create, :show]
  get "/login", to: "sessions#new"
  post "/login", to: "sessions#create"

  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :ideas, only: [:index, :create, :destroy, :update]
    end
  end
end
