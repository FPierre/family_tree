class Person < ApplicationRecord
  belongs_to :family

  enum gender: [:male, :female]
end
