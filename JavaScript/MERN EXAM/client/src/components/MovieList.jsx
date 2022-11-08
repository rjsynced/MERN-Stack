import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import DeleteButton from './DeleteButton'

const MovieList = (props) => {

    const [movie, setMovie] = useState([])
    const [rating, setRating] = useState('')

    useEffect(() => {
        axios
            .get("http://127.0.0.1:8000/api/movies")
            .then((res) => setMovie(res.data));
    }, []);

    const removeFromDom = (movieId) => {
        setMovie(movie.filter((movie) => movie._id != movieId));
    };

    return (
        <div className='container'>
            <table className='table'>
                <thead>
                    <tr>
                        <th scope='col'>Movie Title</th>
                        <th scope='col'>Avg. Rating</th>
                        <th scope='col'>Actions</th>
                    </tr>
                </thead>
                {movie.map((movie, index) => {
                    return (
                        <tr key={index}>
                            <td>{movie.movieTitle}</td>
                            <td>{movie.rating}</td>
                            <td>
                                <Link to={`/movies/reviews/${movie._id}`}>Read Reviews</Link>
                                <Link to={`/movies/${movie._id}/reviews/new`}>Write a Review</Link>
                            </td>
                        </tr>
                    )
                })}
            </table>
        </div>
    )
}

export default MovieList