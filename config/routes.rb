Rails.application.routes.draw do
  root 'users#index'
  resources :users, only: [:index, :create]
  resources :transactions, only: [:index, :create, :update, :destroy]
end
