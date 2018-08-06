class AddAdminToSpotifies < ActiveRecord::Migration[5.1]
  def change
    add_column :spotifies, :admin, :boolean, default: false
  end
end
