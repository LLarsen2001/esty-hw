import axios from 'axios'
import React, { useState } from 'react'
import { Select } from 'semantic-ui-react'
import { useAxiosOnMount } from '../../hooks'

const Categories = () => {
    const { data: categories, loading } = useAxiosOnMount('/api/categories')
    const [products, setProducts] = useState(null)

    const handleChange = async (e, { value }) => {
        try {
            let res = await axios.get(`/api/categories/${value}`)
            setProducts(res.data);
        } catch (err) {
            alert('error in handle Change on the categories page')
        }
    }

    const renderSelect = () => {
        if (!categories) {
            return (< Select
                disabled
                placeholder="Loading"
                options={[]}
            />
            )
        }
        let categoriesOptions = categories.map((c) => {
            return { key: c, value: c, text: c }
        })
        return (
            < Select
                onChange={handleChange}
                placeholder="Select the Category you'd like to view"
                options={categoriesOptions}
            />
        )
    };

    const renderProducts = () => {
        if (!products) {
            return <p>no products</p>
        }
        console.log(products)
        return products.map(p => {
            return (
                <div>
                    {JSON.stringify(p)}
                </div>
            )
        })
    }

    return (
        <div>
            <h2>Categories</h2>
            {renderSelect()}
            {renderProducts()}
            <p>products: {renderProducts(products)} </p>

        </div>
    )
}
export default Categories