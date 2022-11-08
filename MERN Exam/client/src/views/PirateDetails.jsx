import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import DeleteButton from '../components/DeleteButton';

const PirateDetails = () => {
    const [pirate, setPirate] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect( () => {
        axios.get(`http://127.0.0.1:8000/api/pirates/${id}`)
            .then(res => setPirate(res.data[0]))
            .catch(err => console.log(err));
    }, [id])
    return (
        <>
            <Link to="/">Home</Link>
            <h1>{pirate.name}</h1>
            <img src={pirate.imgUrl} alt="pic" />
            <h3>Position: {pirate.position}</h3>
            <p>Catch Phrase: {pirate.catchPhrase}</p>
            <p>Treasures: {pirate.treasures}</p>
            <p>Peg Leg: {pirate.pegLeg ? "Yes" : "No"}</p>
            <p>Eye Patch: {pirate.eyePatch ? "Yes" : "No"}</p>
            <p>Hook Hand: {pirate.hookHand ? "Yes" : "No"}</p>
            <Link to={`/pirates/${pirate._id}/edit`}>Update Pirate</Link>
            <DeleteButton pirateId={pirate._id} successCallback={() => navigate('/')}/>
        </>
    )
}

export default PirateDetails