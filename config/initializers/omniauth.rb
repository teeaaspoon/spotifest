require 'rspotify/oauth'
require 'dotenv'
Dotenv.load

Rails.application.config.middleware.use OmniAuth::Builder do
  provider :spotify, ENV["CLIENT_ID"], ENV["CLIENT_SECRET"], scope: 'user-read-email playlist-modify-private playlist-modify-public playlist-read-private user-library-read user-library-modify user-top-read'
end


