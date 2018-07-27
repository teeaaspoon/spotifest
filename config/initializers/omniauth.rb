require 'rspotify/oauth'

Rails.application.config.middleware.use OmniAuth::Builder do
  provider :spotify, "93f4e88d8d0049ebaa27cef78dd4d9a7", "123fbd3643f340758de3c12782cbd67d", scope: 'user-read-email playlist-modify-public user-library-read user-library-modify'
end


