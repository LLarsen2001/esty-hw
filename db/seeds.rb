# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

Buyer.destroy_all
Product.destroy_all
Seller.destroy_all

categories = [
    'something1',
    'something2',
    'something3',
    'something4',
    ]


    10.times do
    s = Seller.create(
      name: Faker::Name.name,
      email: Faker::Internet.email,
     
    )
        5.times do
        num_categories = rand(0..categories.length - 1);
        Buyer.create(
          name: Faker::Name.name,
          max_price: rand(99000..1500000),
          desired_categories: categories.sample(num_categories),
          seller_id: s.id
        )
    end
        5.times do
           p = Product.create(
            price: rand(99000..1500000),
            description: Faker::Quote.famous_last_words,
            category: categories.sample,
            seller_id: s.id
        )
      end
      puts "Seller size:#{Seller.all.size}"
      puts "Buyers size:#{Buyer.all.size}"
      puts "Products size:#{Product.all.size}"
    end

