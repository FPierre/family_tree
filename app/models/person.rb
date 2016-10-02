class Person < ApplicationRecord
  belongs_to :family

  validates :first_name, :gender, :family, presence: true

  enum gender: [:male, :female]
end
