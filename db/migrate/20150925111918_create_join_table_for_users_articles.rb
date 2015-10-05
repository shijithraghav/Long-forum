class CreateJoinTableForUsersArticles < ActiveRecord::Migration
  def self.up
    create_table :articles_users, id: false do |t|
      t.belongs_to :article
      t.belongs_to :user
      end
  end
  def self.down
    drop_table :articles_users
  end
end
