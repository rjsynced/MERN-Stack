import React, { useState } from 'react'
import { Outlet, Link } from 'react-router-dom'

const AuthorForm= (props) => {
    // const { errors } = props
    const { initialName, onSubmitProp } = props
    const [name, setName] = useState(initialName)

    const onSubmitHandler = (e) => {
        e.preventDefault();
        onSubmitProp({name}); // passing on the submitted info to main
        setName(initialName)// reset 
    }

    return (
        <form onSubmit={onSubmitHandler}>
            {/* {errors.map((error, index) => <p key={index}>{error}</p>)} */}
            <div>
            <label>Author: </label><br/>
                <input type="text" name="title" value={name} onChange={(e) => { setName(e.target.value) }} />
            </div>
            <Link to="/">Cancel</Link>
            <button>Submit Form</button>
            <Outlet />
        </form>
    )
}

export default AuthorForm;