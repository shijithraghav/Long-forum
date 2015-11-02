class Article < ActiveRecord::Base
acts_as_taggable_on :tags
after_update :visibility_check
has_one  :parent_article, class_name: 'Article',foreign_key: 'id',primary_key: 'parent_id'
has_many :comments, dependent: :destroy
has_many :invites, dependent: :destroy
has_many :sub_articles , class_name: 'Article', foreign_key: 'parent_id', dependent: :destroy
has_and_belongs_to_many :fav_users, join_table: :articles_users,class_name: 'User'

belongs_to :user

validates :title, presence: true,
                     length: { minimum: 5 }

has_reputation :votes, source: :user, aggregated_by: :sum
has_attached_file :image, styles: { small: "64x64", med: "100x100", large: "150x150" }
default_scope  { order(:created_at => :desc) }
accepts_nested_attributes_for :invites ,allow_destroy:true


def visibility_check
  if self.visibility == "public"
    Invite.where(:article_id => self.id).destroy_all
  end
end


def self.popular
  reorder('votes desc').find_with_reputation(:votes, :all)
end
end
