class Api::BuyersController < ApplicationController
    
    def index
        seller = Seller.find(params[:id])
        render json: seller.buyers
    end
    
    def show
        buyer = Buyer.find(params[:id])
        render json: Buyer.my_product( buyer.id)
    end
end
