class DropUsersTable < ActiveRecord::Migration[5.1]
  def change
    drop_table :users, force: :cascade
  end
end
