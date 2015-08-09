class TransactionsController < ApplicationController

  def index
    @user = get_user
    respond_to do |format|
      format.json do
        @transactions = @user.transactions.order(id: :asc).all
      end
    end
  end

  def create
    @user = get_user
    @transaction = @user.transactions.new(transaction_params)
    respond_to do |format|
      if @transaction.save
        format.json { render json: {}, status: 201 }
      else
        format.json { render json: @transaction.errors, status: 422 }
      end
    end
  end

  def update
    @user = get_user
    @transaction = get_transaction(@user)
    respond_to do |format|
      if @transaction.update_attributes(transaction_params)
        format.json { render json: {}, status: 202 }
      else
        format.json { render json: @transaction.errors, status: 422 }
      end
    end
  end

  def destroy
    @user = get_user
    @transaction = get_transaction(@user)
    @transaction.destroy
    respond_to do |format|
      format.json { render json: {}, status: 200 }
    end
  end

  private

  def transaction_params
    params.require(:transaction).permit(:name, :date, :amount, :category)
  end

  def get_user
    User.find(session[:user_id])
  end

  def get_transaction(user)
    user.transactions.find(params[:id])
  end


end
