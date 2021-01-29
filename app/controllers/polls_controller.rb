class PollsController < ApplicationController
  before_action :current_user, only: [:create]

  def index
    poll = Poll.all
    render json: { polls: poll }
  end

  def create
    if logged_in?
      params[:poll][:user_id] = current_user.id
      poll = Poll.new(poll_params)

      if poll.save
        render json: { success: "Poll created", polls: poll }
      else
        render json: { message: poll.errors.full_messages }
      end
    end
  end

  def show
    polls = Poll.find(params[:id])
    render json: { polls: polls, options: polls.options }
  end

  private
  
    def poll_params
      params.require(:poll).permit(:title, :user_id, options_attributes: [:name])
    end
end
