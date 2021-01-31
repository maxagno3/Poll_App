class VotesController < ApplicationController
  before_action :authenticate

  def create
   poll = Poll.find(params[:poll_id])

    if voted?(poll)
      render json: { error: "You have already voted for this poll!" }
    else
      params[:vote][:user_id] = current_user.id
      vote = Vote.new(vote_params)
      if vote.save
        option = poll.options.detect { |option| option.id == vote.option_id }
        option.increment!(:vote_count)
        render json: { message: "Your vote has been cast.", votes: option.vote_count }
      else
        render json: { error: vote.errors.full_messages }
      end
    end

  end

  private

    def voted?(poll)
      poll.voter_ids.include? (current_user.id)
    end

    def vote_params
      params.require(:vote).permit(:poll_id, :user_id, :option_id)
    end
end
