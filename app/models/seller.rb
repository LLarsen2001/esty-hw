class Seller < ApplicationRecord
has_many :buyers
has_many :products

    def self.all
        Seller.find_by_sql("
        SELECT s.id, s.name, s.email
        FROM sellers AS s
        INNER JOIN products AS p ON p.seller_id = s.id;
        ")
    end
end
