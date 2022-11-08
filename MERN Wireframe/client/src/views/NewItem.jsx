import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import ItemForm from '../components/ItemForm'

const NewItem = () => {

    const [errors, setErrors] = useState([]);

    return (
        <>
            <div>
                <Link to="/">Home</Link>
            </div>
            <h1>Items</h1>
            <h4>Add a New Item:</h4>
            {errors.map((error, index) => ( <p key={index}>{error}</p>))}
            <ItemForm serverErrors={errors}/>
        </>
    )
}

export default NewItem