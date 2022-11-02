// this is a more consolidated form
import React, { useState } from 'react'
import axios from 'axios'
import { Outlet } from 'react-router-dom'

const initialState = {
    title: "",
    price: "",
    description: ""
}
const ProductForm= (props) => { 
    const [values, setValues] = useState(initialState)
    const [errors, setErrors] = useState(initialState)
    const [isValid, setIsValid] = useState(false)
    const handleChange = (e) => {
        setValues({...values, [e.target.name]: e.target.value})
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (isValid) {
            axios.post('http://127.0.0.1:8000/api/products', values)
            .then(res=>console.log(res))
            .catch(err=>console.log(err))
            props.handleSubmit(values)
            setValues(initialState);
        }
    }
    const handleValidation = (e) => {
        let isValidSubmission = true
        const fieldName = e.target.name
        const value = e.target.value
        if (fieldName === 'title') {
            if(value.length < 2) {
                setErrors({...errors, [fieldName]: "Title is required!"});
                isValidSubmission = false
            } else if(value.length < 2) {
                setErrors({...errors, [fieldName]: "Title must be 2 characters or longer!"});
                isValidSubmission = false
            } else {
                setErrors({...errors, [fieldName]: ""});
            }
        } 
        if (fieldName === 'price') {
            if(value.length < 1) {
                setErrors({...errors, [fieldName]: "Price is required!"});
                isValidSubmission = false
            } else if(value.length < 1) {
                setErrors({...errors, [fieldName]: "Price must have 1 character minimum!"});
                isValidSubmission = false
            } else {
                setErrors({...errors, [fieldName]: ""});
            }
        } 
        if (fieldName === 'description') {
            if(value.length < 5) {
                setErrors({...errors, [fieldName]: "Description is required!"});
                isValidSubmission = false
            } else if(value.length < 5) {
                setErrors({...errors, [fieldName]: "Description must be 5 characters or longer!"});
                isValidSubmission = false
            } else {
                setErrors({...errors, [fieldName]: ""});
            }
        }
        setIsValid(isValidSubmission)
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='title'>Title: </label>
                <input name='title' type="text" onChange={ handleChange } onBlur={ handleValidation } value={ values.title }/>
                {errors.title && <p style={{color:'red'}}>{ errors.title }</p>}
            </div>
            <div>
                <label htmlFor='price'>Price: </label>
                <input name='price' type="text" onChange={ handleChange } onBlur={ handleValidation } value={ values.price }/>
                {errors.price && <p style={{color:'red'}}>{ errors.price }</p>}
            </div>
            <div>
                <label htmlFor='description'>Description: </label>
                <input name='description' type="text" onChange={ handleChange } onBlur={ handleValidation } value={ values.description }/>
                {errors.description && <p style={{color:'red'}}>{ errors.description }</p>}
            </div>
            <button className='Submit'>Submit Form</button>
            <Outlet />
        </form>
    )
}


export default ProductForm;