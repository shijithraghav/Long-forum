class UsersController < ApplicationController

    autocomplete :user, :email

    def get_autocomplete_items(parameters)
      article= params[:id_element]
      items = super(parameters)
      items = items.joins("left outer join invites on invites.user_id=users.id and invites.article_id='#{article}'").where("invites.article_id is NULL and users.id NOT IN (?)",current_user)

  end

  def show
    @user = User.find(params[:id])
    if current_user.id == @user.id
      @invites = Invite.where(:user_id => @user.id, :status => 'false').paginate(:per_page => 3, :page => params[:page])
    end
  end
end
