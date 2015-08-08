Rails.application.routes.draw do

  root 'home#index'

  get  '/login' =>  'sessions#new'
  post '/login' =>  'sessions#create'
  get  '/logout' => 'sessions#destroy'

  get '/signup' => 'users#new'
  post '/users' => 'users#create'

  resources :transactions, only: [:index, :create, :update, :destroy]

end
