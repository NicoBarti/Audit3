class Usuario < ApplicationRecord
  validates :nombre, presence: true, uniqueness: true
end
