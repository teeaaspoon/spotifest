Rails.application.routes.draw do

  get '/auth/spotify/callback/', to: 'api/v1/spotifies#login'
  get "create", to: "api/v1/spotifies#create", as: :create_spotify

  

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api do
    namespace :v1 do
      post '/createspotifyplaylist' => 'createspotifyplaylist#create'
      resources :tokens
      post "/add_artists_to_festival" => 'artistfestival#create'
      resources :users
      resources :festivals do
        resources :artists, only: [:index]
      end
      resources :spotifies
      resources :festivals
      resources :artists do
        resources :songs
      end
    end
  end
end
