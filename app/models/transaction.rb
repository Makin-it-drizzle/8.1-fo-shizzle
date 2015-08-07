class Transaction < ActiveRecord::Base
  validates :date, :amount, :category, presence: true
end