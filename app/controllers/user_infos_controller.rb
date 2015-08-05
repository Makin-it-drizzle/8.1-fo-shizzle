class UserInfosController < ApplicationController
  def index
    @user_infos = UserInfo.all
  end
end
