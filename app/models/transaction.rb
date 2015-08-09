class Transaction < ActiveRecord::Base
  belongs_to :user
  validates :date, :amount, :category, presence: true
end
