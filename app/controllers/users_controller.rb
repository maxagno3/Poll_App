class UsersController < ApplicationController
  # protect_from_forgery with: :null_session

  def new
    @user = User.new
  end

  def create
    @user = User.new(
      name: params[:name], email: params[:email], password: params[:password], password_confirmation: params[:password_confirmation]
    )
    if @user.save
      render json: { message: "User created successfully" }
    else
      render json: { error: @user.errors.full_messages }, status: 422
    end
  end

  def index
    if logged_in?
      render json: {user: current_user}
    else
      render json: { error: "Unauthorised!" }, status: 422
    end
  end

  # private

    # def user_params
    #   params.require(:user).permit!(:name, :email, :password, :password_confirmation)
    # end

end
