Rails.application.routes.draw do
  devise_for :users

  resources :families, only: [:show, :new, :edit, :create, :update, :destroy] do
    resources :people
  end

  root 'peoples#index'
end
