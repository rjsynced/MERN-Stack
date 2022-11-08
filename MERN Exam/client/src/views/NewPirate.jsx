import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import PirateForm from '../components/PirateForm'

const NewPirate = () => {

    const [errors, setErrors] = useState([]);

    return (
        <>
            <div>
                <Link to="/">Home</Link>
            </div>
            <h1>Pirates</h1>
            <h4>Add a new pirate:</h4>
            {errors.map((error, index) => ( <p key={index}>{error}</p>))}
            <PirateForm serverErrors={errors}/>
        </>
    )
}

export default NewPirate