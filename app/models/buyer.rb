class Buyer < ApplicationRecord
  belongs_to :seller
  serialize :desired_categories, Array


  # def yo
  # self.desired_categories.join('-')
  # end

end
