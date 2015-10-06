class CommentsController < ApplicationController

  autocomplete :tag, :name, :class_name => 'ActsAsTaggableOn::Tag'
respond_to :html, :js
  def create
   @article = Article.find(params[:article_id])
   @comment = @article.comments.create(comment_params)
   @comment.user = current_user
   @comment.commenter = current_user.username
   @comment.save
   redirect_to article_path(@article)
 end
 def destroy
     @article = Article.find(params[:article_id])
     @comment = @article.comments.find(params[:id])
     @comment.destroy
     redirect_to article_path(@article)
   end

   def vote
     value = params[:type] == "up" ? 1 : -1
     @comment = Comment.find(params[:id])
     @comment.add_or_update_evaluation(:votes, value, current_user)

   end

 private
   def comment_params
     params.require(:comment).permit(:commenter, :body, :tag_list)
   end



end
