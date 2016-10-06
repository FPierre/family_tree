class Person < ApplicationRecord
  belongs_to :family
  has_one :birth_place, -> { where name: 'birth_place' }, through: :passages
  has_one :death_place, -> { where name: 'death_place' }, through: :passages

  accepts_nested_attributes_for :birth_place, :death_place

  validates :first_name, :gender, presence: true

  enum gender: [:male, :female]
end
