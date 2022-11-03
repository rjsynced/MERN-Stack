import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import DeleteButton from '../components/DeleteButton';

const ViewDetails = () => {
    const [product, setProduct] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect( () => {
        axios.get(`http://127.0.0.1:8000/api/products/${id}`)
            .then(res => setProduct(res.data[0]))
            .catch(err => console.log(err));
    }, [id])
    return (
        <>
            <h2>Title: {product.title}</h2>
            <p>Price: {product.price}</p>
            <p>Description: {product.description}</p>
            <Link to={`/products/${product._id}/edit`}>Update Product</Link>
            <DeleteButton productId={product._id} successCallback={() => navigate('/')}/>
        </>
    )
}

export default ViewDetails