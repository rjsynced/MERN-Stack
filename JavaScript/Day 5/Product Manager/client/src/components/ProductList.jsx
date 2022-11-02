import React from 'react'
import { Link } from 'react-router-dom'

const ProductList = (props) => {
    const productElements = props.products.map((product, index) => (<div key={index}>
        <br />
        <Link to={`/${product._id}`}>{product.title}</Link>
        </div>
    ))

    return (
        <>
        <div>
            <h1>All Products</h1>
            {productElements}
        </div>
        </>
    )
}

export default ProductList