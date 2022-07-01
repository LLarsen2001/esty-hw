import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const Buyers = () => {
    const [seller, setSellers] = useState([])
    useEffect(() => {
        getSellers()
    }, [])

    const getSellers = async () => {
        try {
            let res = await axios.get("/api/sellers")
            setSellers(res.data)
        } catch (err) {
            alert('error hass occured in the get Sellers')
        }
    }

    return (
        <div>
            <h2>Buyers</h2>
        </div>
    )
}
export default Buyers;
