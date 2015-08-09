class CreateTransactions < ActiveRecord::Migration
  def change
    create_table :transactions do |t|
      t.integer :user_id,        null: false
      t.string  :name,           null: false
      t.date    :date,           null: false
      t.integer :amount,         null: false
      t.string  :category,       null: false
      t.timestamps               null: false
    end
  end
end
