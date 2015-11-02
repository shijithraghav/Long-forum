class Invite < ActiveRecord::Base
  belongs_to :article
  belongs_to :user
  validates_uniqueness_of :user_id,:scope=>:article_id


  default_scope  { order(:created_at => :desc) }




end
