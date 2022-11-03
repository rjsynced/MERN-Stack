import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import DeleteButton from './DeleteButton'

const ProductList = (props) => {
    
    const [product, setProduct] = useState([])
    
    useEffect(() => {
        axios
            .get("http://127.0.0.1:8000/api/products")
            .then((res) => setProduct(res.data));
    }, []);

    const removeFromDom = (productId) => {
        setProduct(product.filter((product) => product._id != productId));
    };
    
    return (
        <div>
            <h1>All Products: </h1>
            {product.map((product, indx) => {

                return (
                    <p key={indx}>
                        <Link to={`/products/${product._id}`}>{product.title}</Link><br />
                        <Link to={`/products/${product._id}/edit`}>Edit</Link><span>     </span>
                        | <span>     </span>
                        <DeleteButton 
                            productId={product._id}
                            successCallback={()=>removeFromDom(product._id)}
                        />
                    </p>
                )
            })}
        </div>
    )
}

export default ProductList