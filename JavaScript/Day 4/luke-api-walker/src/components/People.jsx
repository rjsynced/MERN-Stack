import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios'

const People = () => {
    const [people, setPeople] = useState('');
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${id}`)
            .then( response => setPeople(response.data))
            .catch( (e) => navigate('/Error'));
    }, [id, navigate])

    if (people === null) {
        return "Loading...";
    }

    return (
        <div>
            <h1>Name: {people.name}</h1>
            <p>Height: {people.height}</p>
            <p>Mass: {people.mass}</p>
            <p>Hair Color: {people.hair_color}</p>
            <p>Skin Color: {people.skin_color}</p>
        </div>
    )
}

export default People