import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios'

const Planets = () => {
    const [planets, setPlanets] = useState('');
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`https://swapi.dev/api/planets/${id}`)
            .then(response => setPlanets(response.data))
            .catch( (e) => navigate('/Error') );
    }, [id, navigate])

    if (planets === null) {
        return "Loading...";
    }

    return (
        <div>
            <h1>Name: {planets.name}</h1>
            <p>Climate: {planets.climate}</p>
            <p>Terrain: {planets.terrain}</p>
            <p>Surface Water: {planets.surface_water}</p>
            <p>Population: {planets.population}</p>
        </div>
    )
}

export default Planets