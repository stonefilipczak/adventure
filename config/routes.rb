Rails.application.routes.draw do
  get 'game/index'
  get 'show', to: "game#show"
  
  resources :scenes
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'game#index'
end
