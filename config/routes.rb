Rails.application.routes.draw do
  root 'home#index'

  resources :user_infos, only: [:index]
end
