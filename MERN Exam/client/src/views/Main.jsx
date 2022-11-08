import React, { useEffect, useState } from 'react'
import PirateForm from '../components/PirateForm';
import PirateList from '../components/PirateList';
import axios from 'axios'

const Main = () => {
    const [pirates, setPirates] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/pirates')
            .then(res => {
                setPirates(res.data);
                setLoaded(true);
            })
            .catch(err => console.error(err));
    }, [pirates]);

    const removeFromDom = (pirateId) => {
        setPirates(pirates.filter((pirate) => pirate._id != pirateId));
    };

    const createPirate = (pirate) => {
        axios
            .post('http://127.0.0.1:8000/api/pirates', pirate)
            .then(
                console.log(pirate),
                setPirates(pirates => [...pirates, pirate]),
                setLoaded(false)
            )
            .catch(err => console.log(err))
    }

    return (
        <div>
            {loaded && <PirateList pirates={pirates} removeFromDom={removeFromDom}/>}
        </div>
    )
}

export default Main;