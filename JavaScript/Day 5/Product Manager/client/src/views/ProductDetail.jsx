import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const ProductDetail = () => {
    const [product, setProduct] = useState([]);
    const {_id} = useParams();
    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/products/${_id}`)
            .then(res => setProduct(res.data[0]))
            .catch(err => console.log(err))
    }, [])
    return (
        <>
            <h2>Title: {product.title}</h2>
            <p>Price: {product.price}</p>
            <p>Description: {product.description}</p>
        </>
    )
}

export default ProductDetail