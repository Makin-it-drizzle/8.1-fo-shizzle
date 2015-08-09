class UsersController < ApplicationController
  def index
    respond_to do |format|
      format.html
      format.json do
        @users = User.all
      end
    end
  end

  def create
    user = User.new(user_params)
    respond_to do |format|
      if user.save
        format.json { render json: {}, status: 200 }
      else
        format.json { render json: user.errors, status: 422 }
      end
    end
  end

  def edit
    if current_user
      @user = get_user
    else
      redirect_to root_path
    end
  end


  private

  def user_params
    params.require(:user).permit(:name, :address, :phone, :email, :password, :password_confirmation)
  end

  def get_user
    User.find(session[:user_id])
  end


end
