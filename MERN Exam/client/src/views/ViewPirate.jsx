import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import DeleteButton from '../components/DeleteButton';

const ViewPirate = () => {
    const [pirate, setPirate] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect( () => {
        axios.get(`http://127.0.0.1:8000/api/pirates/${id}`)
            .then(res => setPirate(res.data[0]))
            .catch((err) => navigate('/error'));
    }, [id])
    return (
        <>
            <h2>Pirate: {pirate.name}</h2>
            <Link to={`/pirates/${pirate._id}/edit`}>Update Pirate</Link>
            <DeleteButton productId={pirate._id} successCallback={() => navigate('/')}/>
        </>
    )
}

export default ViewPirate