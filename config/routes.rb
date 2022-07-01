Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"


  namespace :api do
    get '/products', to:'products#index'
    get '/categories', to:'products#categories'
    get '/categories/:category', to:'products#by_category'
  end


end
