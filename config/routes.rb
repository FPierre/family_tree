Rails.application.routes.draw do
  devise_for :users
  resources :people, :families

  root 'families#index'
end
