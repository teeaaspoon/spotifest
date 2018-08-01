Rails.application.routes.draw do

  get '/auth/spotify/callback/', to: 'api/v1/spotifies#login'
  post '/api/v1/createspotifyplaylist', to: 'api/v1/spotifies#create_playlist'
  get "create_user", to: "api/v1/spotifies#create_user", as: :create_spotify
  post "set_user", to: "api/v1/spotifies#set_user", as: :set_user



  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api do
    namespace :v1 do
      resources :tokens
      post "/add_artists_to_festival" => 'artistfestival#create'
      resources :users
      resources :festivals do
        resources :artists, only: [:index]
      end
      resources :spotifies
      resources :festivals
      resources :artists do
        resources :genres
        resources :songs
      end
      resources :genres do
        resources :artists
      end
    end
  end
end
