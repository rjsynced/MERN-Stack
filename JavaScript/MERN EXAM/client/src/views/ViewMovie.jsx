import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import DeleteButton from '../components/DeleteButton';

const ViewMovie = () => {
    const [movie, setMovie] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect( () => {
        axios.get(`http://127.0.0.1:8000/api/movies/${id}`)
            .then(res => setMovie(res.data[0]))
            .catch((err) => navigate('/error'));
    }, [id])
    return (
        <>
            <h2>Pirate: {movie.name}</h2>
            <Link to={`/movies/${movie._id}/edit`}>Update Movie</Link>
            <DeleteButton productId={movie._id} successCallback={() => navigate('/')}/>
        </>
    )
}

export default ViewMovie