require 'sidekiq/web'

Rails.application.routes.draw do

  root 'home#index'

  get  '/login' =>  'sessions#new'
  post '/login' =>  'sessions#create'
  get  '/logout' => 'sessions#destroy'

  get  '/signup' => 'users#new'
  post '/users'  => 'users#create'
  get  '/user'    => 'users#show'

  resources :transactions, only: [:index, :show, :create, :update, :destroy]


  mount Sidekiq::Web => '/sidekiq'
end
