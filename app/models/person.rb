class Person < ApplicationRecord
  belongs_to :family
  belongs_to :place

  accepts_nested_attributes_for :place

  validates :first_name, :gender, presence: true

  enum gender: [:male, :female]
end
