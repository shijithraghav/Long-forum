class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  has_many :invites
  has_many :articles
  has_many :sub_articles , class_name: 'Article', primary_key: 'parent_id'
  has_many :evaluations, class_name: "RSEvaluation", as: :source
  has_and_belongs_to_many :fav_articles, join_table: :articles_users,class_name: 'Article'


  has_reputation :votes, source: {reputation: :votes, of: :haikus}, aggregated_by: :sum


  def voted_for?(comment)
      evaluations.where(target_type: comment.class, target_id: comment.id).present?
  end
  def voted_for?(article)
      evaluations.where(target_type: article.class, target_id: article.id).present?
  end
end
