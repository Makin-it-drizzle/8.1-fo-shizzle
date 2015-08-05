require 'test_helper'

class UserInfosControllerTest < ActionController::TestCase
  def setup
    @user_info = user_infos(:one)
  end
  test "GET #index" do
    get :index, format: :json
    assert_response :success
  end

  test "POST create an user" do
    assert_difference('UserInfo.count', 1) do
      post :create, format: :json, user_info: {name: "TestName", email: "testemail@email.com", password: "password" }
    end
    assert_response :success
  end

end
