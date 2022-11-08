import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

const ReviewDetails = () => {
    const [reviews, setReviews] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/movies/${id}/reviews`)
            .then(res => setReviews(res.data))
            .catch(err => console.log(err));
    }, [id])
    console.log(reviews)
    return (
        <div className='container'>
            <Link to="/">Home</Link>
            <h1>Reviewer: {reviews.name}</h1>
            <h1>Rating: {reviews.rating}</h1>
            <h1>Review: {reviews.review}</h1>
        </div>
    )
}

export default ReviewDetails