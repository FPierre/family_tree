class CreatePassage < ActiveRecord::Migration[5.0]
  def change
    create_table :passages do |t|
      t.references :person, foreign_key: true
      t.references :place, foreign_key: true
      t.string :name
    end
    add_index :passages, :name
  end
end
