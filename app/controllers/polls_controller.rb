class PollsController < ApplicationController
  before_action :authenticate, only: [:create]

  def index
    poll = Poll.all
    render json: poll.to_json(only: [:id, :title], include: [:options])
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

  private
  
    def poll_params
      params.require(:poll).permit(:title, :user_id, options_attributes: [:name])
    end
end
