Rails.application.routes.draw do
  devise_for :users

  # resources :families, only: [:show, :new, :edit, :create, :update, :destroy] do
  #   resources :people, shallow: true do
  #     resources :places, shallow: true
  #   end
  # end

  resources :families, only: [:show, :new, :edit, :create, :update, :destroy], shallow: true do
    resources :people do
      resources :places
    end
  end
end
