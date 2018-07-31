class User < ApplicationRecord
  has_one :spotify
  has_secure_password
end
