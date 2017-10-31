Rails.application.routes.draw do
  namespace :api do
    resources :artists do
      resources :songs do
      end
    end
  end
end