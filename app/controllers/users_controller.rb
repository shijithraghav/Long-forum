class UsersController < ApplicationController

    autocomplete :user, :email
    def get_autocomplete_items(parameters)
   items = super(parameters)
   items = items.where("id NOT IN (?)",current_user)
  end

  def show
    @user = User.find(params[:id])
    if current_user.id == @user.id
      @invites = Invite.where(:user_id => @user.id, :status => 'false').paginate(:per_page => 3, :page => params[:page])
    end
  end
end
