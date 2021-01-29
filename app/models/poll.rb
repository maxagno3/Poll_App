class Poll < ApplicationRecord
  belongs_to :user
  has_many :options, dependent: :destroy
  default_scope -> { order(created_at: :desc) }
  validates :user_id, presence: true
  validates :title, presence: true
  accepts_nested_attributes_for :options, allow_destroy: true
end
