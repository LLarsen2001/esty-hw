class Product < ApplicationRecord
  belongs_to :seller

  def self.available
    Product.find_by_sql("SELECT se.name, se.email, p.id as product_id, p.price, p.seller_id, p.description, p.category
    FROM products AS p
    INNER JOIN sellers AS se ON se.id = p.seller_id;")
  
  end
  def self.categories
    categories = Product.find_by_sql("SELECT DISTINCT category
    FROM products;")
    categories.map do |c|
      c.category 
    end
  end

  def self.by_category(category)
    Product.find_by_sql(["SELECT p.price, p.description, p.seller_id, p.category, p.id
    FROM products AS p
    WHERE LOWER(p.category)= ?", category])
  end

end

