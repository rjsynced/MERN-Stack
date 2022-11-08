import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import DeleteButton from '../components/DeleteButton';

const PlayerView = () => {
    const [player, setPlayer] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect( () => {
        axios.get(`http://127.0.0.1:8000/api/players/${id}`)
            .then(res => setPlayer(res.data[0]))
            .catch((err) => navigate('/error'));
    }, [id])
    return (
        <>
            <h2>Player: {player.name}</h2>
            <Link to={`/players/${player._id}/edit`}>Update Player</Link>
            <DeleteButton playerId={player._id} successCallback={() => navigate('/')}/>
        </>
    )
}

export default PlayerView