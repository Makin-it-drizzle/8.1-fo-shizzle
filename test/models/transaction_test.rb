require 'test_helper'

class TransactionTest < ActiveSupport::TestCase
  def setup
    @transaction = transactions(:one)
  end

  test "the fixture is valid" do
    assert @transaction.valid?
  end

  test "is invalid without date" do
    @transaction.date = ""
    refute @transaction.valid?
    assert @transaction.errors.keys.include?(:date)
  end

  test "is invalid without amount" do
    @transaction.amount = ""
    refute @transaction.valid?
    assert @transaction.errors.keys.include?(:amount)
  end

  test "is invalid without category" do
    @transaction.category = ""
    refute @transaction.valid?
    assert @transaction.errors.keys.include?(:category)
  end
end
