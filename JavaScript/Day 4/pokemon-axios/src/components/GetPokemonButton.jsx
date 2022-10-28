import React, { useState, useEffect } from 'react'
import axios from 'axios'

const GetPokemon = () => {
    const [pokemon, setPokemon] = useState([]);
    const [clicked, setClicked] = useState(false)
    useEffect(() => {
        if(clicked === true){
            axios.get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=807")
                .then(response => setPokemon(response.data.results))
    }}, [clicked])

    const FetchEmAll = () => {
        setClicked(true)
    }

    return (
        <div>
            <div>
                <button onClick={ FetchEmAll }>Fetch Pokemon</button>
            </div>
            <div>
                {pokemon.length > 0 && pokemon.map((pokemon, index) => {
                    return (<div key={index}> <p>{pokemon.name}</p></div>)
                })}
            </div>
        </div>
    )
}

export default GetPokemon;