Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api do
    namespace :v1 do
      post "/add_artists_to_festival" => 'artistfestival#create'
      resources :festivals
      resources :artists do 
        resources :songs
      end
    end
  end

end
