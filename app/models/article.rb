class Article < ActiveRecord::Base
acts_as_taggable_on :tags

has_many :comments, dependent: :destroy
has_many :invites
has_many :sub_articles , class_name: 'Article', foreign_key: 'parent_id'
has_and_belongs_to_many :fav_users, join_table: :articles_users,class_name: 'User'

belongs_to :user

validates :title, presence: true,
                     length: { minimum: 5 }

has_reputation :votes, source: :user, aggregated_by: :sum
has_attached_file :image, styles: { small: "64x64", med: "100x100", large: "200x200" }
default_scope  { order(:created_at => :desc) }



def self.search(search)
  where("tags LIKE ?", "%#{search}%")
end
end
