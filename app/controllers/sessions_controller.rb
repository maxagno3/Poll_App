class SessionsController < ApplicationController
  def new
  end

  def create
    user = User.find_by(email: params[:session][:email])
    if user && user.authenticate(params[:session][:password])
      log_in(user)
      render json: { message: "You've logged in successfully.", user: user }
    else
      render json: { error: "Invalid email/password combination." }
    end
  end

  def destroy
    log_out
    render json: { message: "You've been logged out." }
    # redirect_to root_url
  end
end
