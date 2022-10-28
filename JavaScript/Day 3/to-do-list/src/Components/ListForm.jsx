import React, { useState } from 'react'


const initialState = {
    message: "",
    completed: false
}

const ListForm = (props) => {
    const [values, setValues] = useState(initialState);

    const handleChange = (e) => {
        setValues({...values, [e.target.name]: e.target.value})
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        props.handleSubmit(values)
        setValues(initialState)
    }

    return (
        <div>
            <form onSubmit={ handleSubmit }>
                <div>
                    <label htmlFor='message'>Tasks: </label>
                    <input name='message' type="text" value={ values.message } onChange={ handleChange }/>
                </div>
                <input type="submit" value="Add"/>
            </form>
        </div>
    )
}


export default ListForm