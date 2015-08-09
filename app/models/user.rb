class User < ActiveRecord::Base
  has_secure_password
  has_many :transactions

  validates :name, :email, presence: true
end
