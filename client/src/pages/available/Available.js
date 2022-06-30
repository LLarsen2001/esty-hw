import axios from "axios"
import { useEffect, useState } from "react"
import Seller from "./Seller"

const Available = () => {
    let [sellerProducts, setSellerProducts] = useState([]);

    useEffect(() => {
        getSellerProducts();
    }, []);


    const normalizeData = (rawData) => {
        const sellersIds = rawData.map(rd => rd.seller_id);
        const uniqueIds = [...new Set(sellersIds)];
        return uniqueIds.map((id) => {
            let products = rawData.filter((p) => p.seller_id === id);
            let cleanedProducts = products.map((p) => {
                return {
                    id: p.product_id,
                    price: p.price,
                    description: p.description,
                    category: p.category

                };
            });
            return {
                email: products[0].email,
                name: `${products[0].name}`,
                products: cleanedProducts,
            };
        });

    };
    const getSellerProducts = async () => {
        try {
            let res = await axios.get('/api/products')
            let normalizedData = normalizeData(res.data)
            setSellerProducts(normalizedData)
        } catch (err) {
            alert('err')
        }

    }

    const renderSellerProducts = () => {
        return sellerProducts.map(se => {
            return <Seller key={se.id} {...se} />
        })
    }

    return (
        <div>
            <h2>Seller and ther Products</h2>
            {renderSellerProducts()}
            <p>{JSON.stringify(normalizeData)}</p>
        </div>
    );
};
export default Available;