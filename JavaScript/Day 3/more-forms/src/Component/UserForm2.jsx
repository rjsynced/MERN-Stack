// this is a more consolidated form
import React, { useState } from 'react'

const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
}
const UserForm2 = () => { 
    const [values, setValues] = useState(initialState)
    const [errors, setErrors] = useState(initialState)
    const [isValid, setIsValid] = useState(false)
    const handleChange = (e) => {
        setValues({...values, [e.target.name]: e.target.value})
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (isValid) {
            console.log(values)
            setValues(initialState);
        }
    }
    const handleValidation = (e) => {
        let isValidSubmission = true
        const fieldName = e.target.name
        const value = e.target.value
        if (fieldName === 'firstName') {
            if(value.length < 1) {
                setErrors({...errors, [fieldName]: "First Name is required!"});
                isValidSubmission = false
            } else if(value.length < 2) {
                setErrors({...errors, [fieldName]: "First Name must be 2 characters or longer!"});
                isValidSubmission = false
            } else {
                setErrors({...errors, [fieldName]: ""});
            }
        } 
        if (fieldName === 'lastName') {
            if(value.length < 1) {
                setErrors({...errors, [fieldName]: "Last Name is required!"});
                isValidSubmission = false
            } else if(value.length < 2) {
                setErrors({...errors, [fieldName]: "Last Name must be 2 characters or longer!"});
                isValidSubmission = false
            } else {
                setErrors({...errors, [fieldName]: ""});
            }
        } 
        if (fieldName === 'email') {
            if(value.length < 1) {
                setErrors({...errors, [fieldName]: "Email is required!"});
                isValidSubmission = false
            } else if(value.length < 5) {
                setErrors({...errors, [fieldName]: "Email must be 5 characters or longer!"});
                isValidSubmission = false
            } else {
                setErrors({...errors, [fieldName]: ""});
            }
        }
        if (fieldName === 'password') {
            if(value.length < 1) {
                setErrors({...errors, [fieldName]: "Password is required!"});
                isValidSubmission = false
            } else if(value.length < 8) {
                setErrors({...errors, [fieldName]: "Password must be 8 characters or longer!"});
                isValidSubmission = false
            } else {
                setErrors({...errors, [fieldName]: ""});
            }
        } 
        if (fieldName == 'confirmPassword') {
            if(value.length < 1) {
                setErrors({...errors, [fieldName]: "Must confirm Password!"});
                isValidSubmission = false
            } else if(value.length < 8) {
                setErrors({...errors, [fieldName]: "Passwords must be 8 characters or longer!"});
                isValidSubmission = false
            } else if(values.password != value) {
                setErrors({...errors, [fieldName]: "Passwords must match"});
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
                <label htmlFor='firstName'>First Name: </label>
                <input name='firstName' type="text" onChange={ handleChange } onBlur={ handleValidation } value={ values.firstName }/>
                {errors.firstName && <p style={{color:'red'}}>{ errors.firstName }</p>}
            </div>
            <div>
                <label htmlFor='lastName'>Last Name: </label>
                <input name='lastName' type="text" onChange={ handleChange } onBlur={ handleValidation } value={ values.lastName }/>
                {errors.lastName && <p style={{color:'red'}}>{ errors.lastName }</p>}
            </div>
            <div>
                <label htmlFor='email'>Email: </label>
                <input name='email' type="text" onChange={ handleChange } onBlur={ handleValidation } value={ values.email }/>
                {errors.email && <p style={{color:'red'}}>{ errors.email }</p>}
            </div>
            <div>
                <label htmlFor='password'>Password: </label>
                <input name='password' type="text" onChange={ handleChange } onBlur={ handleValidation } value={ values.password }/>
                {errors.password && <p style={{color:'red'}}>{ errors.password }</p>}
            </div>
            <div>
                <label htmlFor='confirmPassword'>Confirm Password: </label>
                <input name='confirmPassword' type="text" onChange={ handleChange } onBlur={ handleValidation } value={ values.confirmPassword }/>
                {errors.confirmPassword && <p style={{color:'red'}}>{ errors.confirmPassword }</p>}
            </div>
            <button className='Submit'>Submit Form</button>
        </form>
    )
}


export default UserForm2;