class Invite < ActiveRecord::Base
  belongs_to :article
  belongs_to :user
  before_update :set
  validates_uniqueness_of :user_id,:scope=>:article_id


  default_scope  { order(:created_at => :desc) }

def set
   if  Invite.where(:user_id => self.user_id , :article_id => self.article_id).blank? && self.article.user.id == current_user.id && self.article.visibility =="private"
     true
   else
     false
   end
end


end
