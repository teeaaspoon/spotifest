Rails.application.routes.draw do

  get '/auth/spotify/callback/', to: 'api/v1/spotifies#login'
  post '/api/v1/spotify/ios_login', to: 'api/v1/spotifies#ios_login'
  post '/api/v1/createspotifyplaylist', to: 'api/v1/spotifies#create_spotify_playlist'
  get "create_user", to: "api/v1/spotifies#create_user", as: :create_spotify
  post "set_user", to: "api/v1/spotifies#set_user", as: :set_user
  get "/api/v1/:userId/genres", to: 'api/v1/spotifies#fetch_top_genres', as: :fetch_top_genres
  get "/api/v1/:userId/artists", to: 'api/v1/spotifies#fetch_top_artists', as: :fetch_top_artists
  get "/api/v1/:userId/playlists", to: 'api/v1/spotifies#fetch_playlists', as: :fetch_playlists
  delete "/api/v1/playlists/:playlistId", to: 'api/v1/spotifies#delete_playlist', as: :delete_playlist

  post '/api/v1/swap', to: 'api/v1/spotifies#token_swap'
  post '/api/v1/refresh', to: 'api/v1/spotifies#token_refresh'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api do
    namespace :v1 do
      resources :requests
      resources :tokens
      post "/add_artists_to_festival" => 'artistfestival#create'
      resources :users
      resources :festivals do
        resources :artists, only: [:index]
      end
      resources :spotifies
      # resources :playlists
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
