class Article < ActiveRecord::Base

acts_as_taggable_on :tags

has_many :comments, dependent: :destroy
   validates :title, presence: true,
                     length: { minimum: 5 }

has_many :sub_articles , class_name: 'Article', foreign_key: 'parent_id'
has_many :invites

        belongs_to :user
   has_reputation :votes, source: :user, aggregated_by: :sum

   has_and_belongs_to_many :fav_users, join_table: :articles_users,class_name: 'User'
end
