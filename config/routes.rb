Rails.application.routes.draw do
  devise_for :users

  resources :families, only: [:show, :new, :edit, :create, :update, :destroy], shallow: true do
    resources :people do
      resources :places
    end
  end
end
