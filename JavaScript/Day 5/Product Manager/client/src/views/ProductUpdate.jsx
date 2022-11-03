import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import ProductForm from '../components/ProductForm'

const ProductUpdate = () => {
    const { id } = useParams();
    const [loaded, setLoaded] = useState(false)
    const [product, setProduct] = useState("")
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/products/${id}`)
            .then(res => {
                console.log(res.data)
                setProduct(res.data[0]) // returns you an object in an array so use [0] to grab the data
                setLoaded(true)
            })
            .catch(err => console.log(err))
    }, [id])

    const updateProduct = (product) => {
        axios
            .put(`http://127.0.0.1:8000/api/products/${id}/edit`, product)
            .then((res) => console.log(res))
            .then(() => navigate("/"));
    };

    return (
        <div>
            <h2>Update a Product</h2>
            {loaded && (<ProductForm onSubmitProp={updateProduct} initialTitle={product.title} initialPrice={product.price} initialDescription={product.description}/>)}
        </div>
    )
}

export default ProductUpdate