class Comment < ActiveRecord::Base
  belongs_to :article
  belongs_to :user
  has_reputation :votes, source: :user, aggregated_by: :sum
  acts_as_taggable

  validates :body, presence: true
  default_scope  { order(:created_at => :desc) }
  has_attached_file :image, styles: { small: "64x64", med: "100x100", large: "200x200" }



   def evaluation_value(user, comment)
     if @up_voted = ReputationSystem::Evaluation.where(:reputation_name => "votes",
       :value => "1.0", :source_id => user.id, :source_type => user.class.name,
       :target_id => comment.id, :target_type => comment.class.name).exists?
     "upvote"
      elsif @down_voted = ReputationSystem::Evaluation.where(:reputation_name => "votes",
       :value => "-1.0", :source_id => user.id, :source_type => user.class.name,
       :target_id => comment.id, :target_type => comment.class.name).exists?
     "downvote"
    else
      nil
    end
  end


end
