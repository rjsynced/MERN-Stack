import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'

const ProductForm= (props) => {
    const { initialTitle, initialPrice, initialDescription, onSubmitProp } = props
    
    const [title, setTitle] = useState(initialTitle)
    const [price, setPrice] = useState(initialPrice)
    const [description, setDescription] = useState(initialDescription)


    const onSubmitHandler = (e) => {
        e.preventDefault();
        onSubmitProp({title, price, description}); // passing on the submitted info to main
        setTitle(initialTitle)// reset 
        setPrice(initialPrice)// reset
        setDescription(initialDescription)// reset
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <div>
            <label>Title: </label><br/>
                <input type="text" name="title" value={title} onChange={(e) => { setTitle(e.target.value) }} />
            </div>
            <div>
            <label>Price: </label><br/>
                <input type="text" name="price" value={price} onChange={(e) => { setPrice(e.target.value) }} />
            </div>
            <div>
            <label>Description: </label><br/>
                <input type="text" name="description" value={description} onChange={(e) => { setDescription(e.target.value) }} />
            </div>
            <button>Submit Form</button>
            <Outlet />
        </form>
    )
}

export default ProductForm;