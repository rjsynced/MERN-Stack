import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Main = () => {
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/players')
            .then(res => {
                setPlayers(res.data);
            })
            .catch(err => console.error(err));
    }, [players]);

    const removeFromDom = (playerId) => {
        setPlayers(players.filter((player) => player._id != playerId));
    };

    return (
        <div>
            
        </div>
    )
}

export default Main;