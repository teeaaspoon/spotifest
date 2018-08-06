require 'rspotify/oauth'

Rails.application.config.middleware.use OmniAuth::Builder do
  provider :spotify, "2349ad21d2e043e590d125ac0974ee0b", "c4b61cdd1c2846b7bb5c96291ee085d8", scope: 'user-read-email playlist-modify-private playlist-modify-public playlist-read-private user-library-read user-library-modify user-top-read'
end


