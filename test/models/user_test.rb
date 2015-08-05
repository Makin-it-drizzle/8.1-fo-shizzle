require 'test_helper'

class UserTest < ActiveSupport::TestCase
  def setup
    @user = users(:one)
  end

  test "the fixture is valid" do
    assert @user.valid?
  end

  test "is invalid without name" do
    @user.name = ""
    refute @user.valid?
    assert @user.errors.keys.include?(:name)
  end

  test "is invalid without email" do
    @user.email = ""
    refute @user.valid?
    assert @user.errors.keys.include?(:email)
  end

  test "is invalid without password_digest" do
    @user.password_digest = ""
    refute @user.valid?
    assert @user.errors.keys.include?(:password_digest)
  end
end
