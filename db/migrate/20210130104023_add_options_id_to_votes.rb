class AddOptionsIdToVotes < ActiveRecord::Migration[6.1]
  def change
    add_column :votes, :option_id, :integer
  end
end
