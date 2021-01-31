class User < ApplicationRecord
  before_save { self.email = email.downcase }
  has_many :polls, dependent: :destroy
  has_many :votes, dependent: :destroy

  validates :name, presence: true, length: { maximum: 50 }
  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-]+(\.[a-z\d\-]+)*\.[a-z]+\z/i
  validates :email, presence: true, format: { with: VALID_EMAIL_REGEX }, length: { maximum: 255 }, uniqueness: true
  has_secure_password
  validates :password, presence: true, length: { minimum: 6 }
end
