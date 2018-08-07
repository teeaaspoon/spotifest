class AddRefreshToSpotifies < ActiveRecord::Migration[5.1]
  def change
    add_column :spotifies, :refresh, :jsonb
  end
end
