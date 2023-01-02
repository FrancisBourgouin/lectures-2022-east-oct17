class CreateUrls < ActiveRecord::Migration[6.1]
  def change
    create_table :urls do |t|
      t.string :shorturl
      t.string :longurl
      t.string :description

      t.timestamps
    end
  end
end
