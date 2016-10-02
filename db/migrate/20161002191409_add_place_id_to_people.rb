class AddPlaceIdToPeople < ActiveRecord::Migration[5.0]
  def change
    add_reference :people, :place, foreign_key: true, index: true
  end
end
