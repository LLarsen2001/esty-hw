class Buyer < ApplicationRecord
  belongs_to :seller
  serialize :desired_categories, Array


  def self.my_product(categories, id)
    Buyer.find_by_sql(["SELECT p.price, p.description, p.category, b.id, b.max_price, b.desired_categories
    FROM buyers AS b
    INNER JOIN sellers AS se ON se.id = b.seller_id
    INNER JOIN products as p ON p.seller_id = se.id
    AND category = ANY('{?}')
    AND p.price < b.max_price
    WHERE b.id = ?;", categories, id])
  end

  def yo
  self.desired_categories.join('-')
  end

end
