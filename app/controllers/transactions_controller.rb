class TransactionsController < ApplicationController

  def index
    respond_to do |format|
      format.html
      format.json do
        @transactions = Transaction.order(id: :asc).all
      end
    end
  end

  def create
    transaction = Transaction.new(transaction_params)
    respond_to do |format|
      if transaction.save
        format.json { render json: {}, status: 201 }
      else
        format.json { render json: @transaction.errors, status: 422 }
      end
    end
  end

  def update
    @transaction = get_transaction
    respond_to do |format|
      if @transaction.update_attributes(transaction_params)
        format.json { render json: {}, status: 202 }
      else
        format.json { render json: @transaction.errors, status: 422 }
      end
    end
  end

  def destroy
    @transaction = get_transaction
    @transaction.destroy
    respond_to do |fo|
      format.json { render json: {}, status: 200 }
    end
  end

  private

  def transaction_params
    params.require(:transaction).permit(:name, :date, :amount, :type)
  end

  def get_transaction
    Transaction.find[:id]
  end


end
