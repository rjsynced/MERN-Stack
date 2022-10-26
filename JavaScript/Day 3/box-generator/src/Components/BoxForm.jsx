import React, { useState } from 'react';

const initialState = {
    color: "",
}
const BoxForm = (props) => {
    const [values, setValues] = useState(initialState);
    
    const handleChange = (e) => {
        e.preventDefault();
        setValues({...values, [e.target.name]: e.target.value})
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        props.handleSubmit(values)
        setValues(initialState)
    }
    
    return (
        <div>
            <form onSubmit={ handleSubmit }>
                <label htmlFor="color">Color: </label>
                <input name='color' type="text" value={values.color} onChange={handleChange}/>
                <button className='Submit'>Submit Color</button>
            </form>
        </div>
    );
};

export default BoxForm;