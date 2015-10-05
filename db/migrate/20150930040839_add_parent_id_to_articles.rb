class AddParentIdToArticles < ActiveRecord::Migration
  def change
    add_column :articles, :parent_id, :integer, :default => 0
  end
end
