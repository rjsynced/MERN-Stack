import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import DeleteButton from './DeleteButton'

const PirateList = (props) => {
    
    const [pirate, setPirate] = useState([])
    
    useEffect(() => {
        axios
            .get("http://127.0.0.1:8000/api/pirates")
            .then((res) => setPirate(res.data));
    }, []);

    const removeFromDom = (pirateId) => {
        setPirate(pirate.filter((pirate) => pirate._id != pirateId));
    };
    
    return (
        <div>
            <h1>All Pirates</h1>
            <Link to='/pirates/new'>Add a Pirate</Link>
                    {
                        pirate.sort((a, b) => {
                            if (a.name < b.name) { return -1; }
                            if (a.name > b.name) { return 1; }
                            return 0;
                        })
                            .map((pirate, index) => {
                                return (
                                    <div key={index}>
                                        <>
                                        <img src={pirate.imgUrl} alt="pic" />
                                        <Link to={`/pirates/${pirate._id}`} key={index}>{pirate.name}</Link>
                                        </>
                                        <Link to={`/pirates/${pirate._id}/edit`} key={index}> Edit</Link>
                                        <DeleteButton pirateId={pirate._id} successCallback={() => removeFromDom(pirate._id)} /> 
                                    </div>
                        );
                    })}
        </div>
    )
}

export default PirateList