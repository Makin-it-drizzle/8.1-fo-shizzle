class User < ActiveRecord::Base
  has_secure_password
  mount_uploader :avatar, AvatarUploader
  has_many :transactions

  validates :name, :email, presence: true
end
