class AddFamilyIdToPeople < ActiveRecord::Migration[5.0]
  def change
    add_reference :people, :family, foreign_key: true, index: true
  end
end
