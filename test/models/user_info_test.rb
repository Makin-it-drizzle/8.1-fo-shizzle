require 'test_helper'

class UserInfoTest < ActiveSupport::TestCase
  def setup
    @user_info = user_infos(:one)
  end

  test "the fixture is valid" do
    assert @user_info.valid?
  end

  test "is invalid without name" do
    @user_info.name = nil
    refute @user_info.valid?
    assert @user_info.errors.keys.include?(:name)
  end

  test "is invalid without email" do
    @user_info.email = nil
    refute @user_info.valid?
    assert @user_info.errors.keys.include?(:email)
  end

  test "is invalid without password_digest" do
    @user_info.password_digest = nil
    refute @user_info.valid?
    assert @user_info.errors.keys.include?(:password_digest)
  end
end