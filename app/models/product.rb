class Product < ApplicationRecord
  belongs_to :seller

  def self.available
    Product.find_by_sql("SELECT se.name, se.email, p.id, p.price, p.description 
    FROM products AS p
    INNER JOIN sellers AS se ON se.id = p.seller_id;")
  end
end

