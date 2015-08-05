require 'test_helper'

class UsersControllerTest < ActionController::TestCase
  def setup
    @user = users(:one)
  end
  test "GET #index" do
    get :index, format: :json
    assert_response :success
  end

  test "POST create an user" do
    assert_difference('User.count', 1) do
      post :create, format: :json, user: {name: "TestName", email: "testemail@email.com", password: "password" }
    end
    assert_response :success
  end

end
