class RemoveLastNameFromPeople < ActiveRecord::Migration[5.0]
  def change
    remove_column :people, :last_name, :string
  end
end
