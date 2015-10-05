class AddVisibilityToArticles < ActiveRecord::Migration
  def change
    add_column :articles, :visibility, :string
  end
end
