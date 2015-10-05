class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

      has_many :articles
      has_many :sub_articles , class_name: 'Article', primary_key: 'parent_id'
      has_and_belongs_to_many :fav_articles, join_table: :articles_users,class_name: 'Article'
end
