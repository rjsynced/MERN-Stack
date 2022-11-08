import React from 'react'
import { Link } from 'react-router-dom';

const NoPlayers = () => {
    return (
        <div>
            <p>
                We're sorry, but we could not find the player you are looking for.
                Would you like to add this player to our database?
            </p>
            <Link to="/players/new">Create Player</Link>
        </div>
    );
}

export default NoPlayers;