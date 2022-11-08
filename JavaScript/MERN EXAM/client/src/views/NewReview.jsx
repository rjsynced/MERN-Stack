import React from 'react'
import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import ReviewForm from '../components/ReviewForm'
import axios from 'axios'

const NewReview = () => {
    const [movie, setMovie] = useState({});
    const [errors, setErrors] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            axios.get(`http://127.0.0.1:8000/api/movies/${id}`)
                .then(res => setMovie(res.data[0]))
                .catch(err => console.log(err))
        }
    }, [id])
    return (
        <>
            <div>
                <Link to="/">Home</Link>
            </div>
            <h1>Reviews for {movie.movieTitle}</h1>
            <h4>Add a New Review:</h4>
            {errors.map((error, index) => ( <p key={index}>{error}</p>))}
            <ReviewForm serverErrors={errors}/>
        </>
    )
}

export default NewReview