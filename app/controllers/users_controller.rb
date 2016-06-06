class UsersController < ApplicationController
  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)

    if @user.save
      session[:user_id] = @user.id
      flash[:success] = "Welcome #{@user.username}!"
      redirect_to user_path(@user)
    else
      # re-render if validations don't pass
      # flash[:error] = user.errors.full_messages
    end
  end

  def show
    @user = current_user
  end

  private
    def user_params
      params.require(:user).permit(:username, :password, :password_confirmation)
    end
end
