class CreatePlaces < ActiveRecord::Migration[5.0]
  def change
    create_table :places do |t|
      t.string :thoroughfare
      t.string :city
      t.string :country
      t.integer :postal_code
      t.float :lat
      t.float :lng

      t.timestamps
    end
  end
end
