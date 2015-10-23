class UsersController < ApplicationController

    autocomplete :user, :email
  def show
    @user = User.find(params[:id])
    if current_user.id == @user.id
      @invites = Invite.where(:user_id => @user.id, :status => 'false').paginate(:per_page => 1, :page => params[:page])
    end
  end
end
