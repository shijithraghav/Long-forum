class ArticlesController < ApplicationController
  autocomplete :tag, :name, :class_name => 'ActsAsTaggableOn::Tag'
  before_action :set_article, only: [:edit]
  before_action :set_article_tags_to_gon, only: [:edit]
  before_action :set_available_tags_to_gon, only: [:new, :edit]
  respond_to :html, :js

  def new
     @article = Article.new
 end
 def edit

 end

 def show
   @users = User.all
     @article = Article.find(params[:id])
   @subarticles = Article.where(:parent_id => @article.id )

  end
  def index
    if params[:tag]
      @tags = true
      @articles = Comment.tagged_with(params[:tag]).map { |comment| comment.article}
      @articles += Article.tagged_with(params[:tag])
      @articles=@articles.uniq
    elsif params[:search]
      @articles = Article.tagged_with(params[:search]).order("created_at DESC").paginate(:per_page => 5, :page => params[:page])

    elsif params[:type]== 'private'
      @articles = Invite.where(:user_id => current_user.id, :status => 'true').map{ |invite| invite.article}

    elsif params[:type]== 'public'
        @articles = Article.where(:visibility => 'public').paginate(:per_page => 5, :page => params[:page])

    elsif params[:type]== 'my'
        @articles = Article.where(:user_id => current_user.id).paginate(:per_page => 5, :page => params[:page])
    elsif params[:type]== 'top'
        @articles = Article.page(params[:page]).popular
  

    else
        @articles = Article.where(:visibility => 'public').paginate(:per_page => 4, :page => params[:page])
    end
   end

 def create
  @article = Article.new(article_params)
  @article.user_id = current_user.id
  if @article.save
  redirect_to @article
else
  render 'new'
end
end

def update
  @article = Article.find(params[:id])

  if @article.update(article_params)
    redirect_to @article
  else
    render 'edit'
  end
end
def favorite
if params[:id]
  @article = Article.find(params[:id])
  if params[:type]=='favourite'
   	current_user.fav_articles << @article
  else
    current_user.fav_articles.delete(@article.id)
  end
else
    @articles= current_user.fav_articles.paginate(:per_page => 5, :page => params[:page])
  end
end


def subpostnew
@main_post_id = Article.find(params[:id])
@article = Article.new


end



def invite
@invite = Invite.new(invite_params)
if Invite.where(:user_id => @invite.user_id, :article_id => @invite.article_id).blank?
  @invite.save
end

end


def invite_accepted
@invite = Invite.find(params[:invite_id])
Invite.where(:id => @invite.id).update_all(:status => 'true')
redirect_to :back

end


def invite_reject
  @invite = Invite.find(params[:invite_id])
  Invite.where(:id => @invite.id).destroy_all
  redirect_to :back

end



def vote
  value = params[:type] == "up" ? 1 : -1
  @article = Article.find(params[:id])
  @article.add_or_update_evaluation(:votes, value, current_user)
end

def destroy
  @article = Article.find(params[:id])
  @article.destroy

  redirect_to articles_path
end


def set_article_tags_to_gon
  gon.article_tags = @article.tag_list
end

def set_available_tags_to_gon
  gon.available_tags = Article.tags_on(:tags).pluck(:name)
end
def set_article
  @article = Article.find(params[:id])
end

private

  def article_params
    params.require(:article).permit(:title, :text, :tag_list, :parent_id, :visibility)
  end

  def invite_params
    params.permit(:user_id, :article_id, :status)
end
end
