import axios from "axios"
import { useEffect, useState } from "react"

import Seller from "./Seller"

const Available = () => {
    let [sellerProducts, setSellerProducts] = useState([])

    useEffect(() => {
        getSellerProducts()
    }, [])

    const getSellerProducts = async () => {
        try {
            let res = await axios.get('/api/products')

            let normailizedData = normailizeData(res.data)
            setSellerProducts(normailizedData)
        } catch (err) {
            alert('err')
        }

    }

    const normailizeData = (rawData) => {
        const sellerIds = rawData.map(rd => rd.seller_id)
        const uniqueIds = [...new Set(sellerIds)]
        return uniqueIds.map(id => {
            let products = rawData.filter(p => p.seller == id)
            let cleanedProducts = products.map(p => {
                return {
                    id: p.product_id,
                    price: p.price,
                    description: p.description
                }
            })
            return {
                email: products[0].email,
                name: `${products[0].name}`,
                products: cleanedProducts
            }
        })

    }


    const renderSellerProducts = () => {
        return sellerProducts.map(a => {
            console.log(a)
            return <Seller key={a.id} {...a} />
        })
    }

    return (
        <div>
            {renderSellerProducts()}


        </div>
    )
}
export default Available