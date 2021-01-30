class VotesController < ApplicationController
  def create
  #  fail
   poll = Poll.find(params[:poll_id])
   params[:vote][:user_id] = current_user.id
   vote = Vote.new(vote_params)
   if vote.save
    render json: { message: "You've voted!", voted: true }
   else
    render json: { error: vote.errors.full_messages }
   end
  end

  private

    def vote_params
      params.require(:vote).permit(:poll_id, :user_id, :option_id)
    end
end
