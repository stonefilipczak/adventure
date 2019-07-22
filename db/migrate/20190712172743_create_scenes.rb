class CreateScenes < ActiveRecord::Migration[5.2]
  def change
    create_table :scenes do |t|
      t.string :blurb
      t.string :prompt
      t.string :choiceA
      t.string :choiceB
      t.string :pathA
      t.string :pathB 

      t.timestamps
    end
  end
end
