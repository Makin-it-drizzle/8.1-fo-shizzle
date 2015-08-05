class CreateUserInfos < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :name, null: false
      t.string :address
      t.string :phone
      t.string :email, null: false
      t.string :password_digest, null: false
      t.timestamps null: false
    end
  end
end
