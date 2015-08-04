require 'test_helper'

class UserInfoTest < ActiveSupport::TestCase
  def setup
    @user_info = users_info(:one)
  end

  test "the fixture is valid" do
    assert @user.valid?
  end

  test "is invalid without name" do
    @user.name = nil
    refute @user.valid?
    assert @user.errors.keys.include?(:name)
  end

end