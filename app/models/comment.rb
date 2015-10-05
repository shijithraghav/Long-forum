class Comment < ActiveRecord::Base

  acts_as_taggable

  belongs_to :article
  belongs_to :user


     has_reputation :votes, source: :user, aggregated_by: :sum
end
