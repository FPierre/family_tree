class Person < ApplicationRecord
  belongs_to :family
  belongs_to :place

  validates :first_name, :gender, presence: true

  enum gender: [:male, :female]
end
