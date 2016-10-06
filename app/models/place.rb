class Place < ApplicationRecord
  has_many :people, through: :passages
end
