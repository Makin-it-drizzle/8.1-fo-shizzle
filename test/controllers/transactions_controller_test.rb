require 'test_helper'

class TransactionsControllerTest < ActionController::TestCase
  test "GET #index" do
    get :index
    assert_equal 200, response.status
  end
end