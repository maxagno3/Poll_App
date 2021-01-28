class PollsController < ApplicationController
  before_action :current_user, only: [:create]

  def index
    @poll = Poll.all
    @current_user = current_user
  end

  def create
    if logged_in?
      @poll = current_user.polls.build(poll_params)

      if @poll.save
        render json: { message: "Poll has been created!" }
      else
        render json: { message: @poll.errors.full_messages }
      end
    end
  end

  private
  
    def poll_params
      params.require(:poll).permit(:title)
    end
end
