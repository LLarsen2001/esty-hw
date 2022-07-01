class Api::ProductsController < ApplicationController

    def index
        render json: Product.available
    end
    def categories 
        render json: Product.categories
    end
end
