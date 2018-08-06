require 'rspotify/oauth'

Rails.application.config.middleware.use OmniAuth::Builder do
  provider :spotify, "5ea296f6092846249c8feb843722704b", "c106d5c9310a436cbaa713092cc5b169", scope: 'user-read-email playlist-modify-private playlist-modify-public playlist-read-private user-library-read user-library-modify user-top-read'
end


