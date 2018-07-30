require 'rspotify/oauth'

Rails.application.config.middleware.use OmniAuth::Builder do
  provider :spotify, "61949ea347f344009e8b87b0e5606c8c", "1158d8503dae4dcb86cacf4bf62904aa", scope: 'user-read-email playlist-modify-public user-library-read user-library-modify'
end


