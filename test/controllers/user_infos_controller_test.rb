require 'test_helper'

class UserInfosControllerTest < ActionController::TestCase
  test "GET #index" do
    get :index
    assert_response :success
  end
end
