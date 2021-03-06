class CreateProducts < ActiveRecord::Migration[7.0]
  def change
    create_table :products do |t|
      t.float :price
      t.text :description
      t.belongs_to :seller, null: false, foreign_key: true
      t.string :category

      t.timestamps
    end
  end
end
