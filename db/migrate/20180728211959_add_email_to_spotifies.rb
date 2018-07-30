class AddEmailToSpotifies < ActiveRecord::Migration[5.1]
  def change
    add_column :spotifies, :email, :string
  end
end
