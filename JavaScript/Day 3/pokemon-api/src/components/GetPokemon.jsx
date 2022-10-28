import React, { useState, useEffect } from 'react'

const GetPokemon = () => {
    const [pokemon, setPokemon] = useState([]);
    const [clicked, setClicked] = useState(false)
    useEffect(() => {
        if (clicked === true) {
            fetch("https://pokeapi.co/api/v2/pokemon")
                .then(response => response.json())
                .then(response => setPokemon(response.results))
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