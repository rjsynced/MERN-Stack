import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import MovieForm from '../components/MovieForm'

const NewMovie = () => {

    const [errors, setErrors] = useState([]);

    return (
        <>
            <div>
                <Link to="/">Home</Link>
            </div>
            <h1>Movies</h1>
            <h4>Add a New Movie:</h4>
            {errors.map((error, index) => ( <p key={index}>{error}</p>))}
            <MovieForm serverErrors={errors}/>
        </>
    )
}

export default NewMovie