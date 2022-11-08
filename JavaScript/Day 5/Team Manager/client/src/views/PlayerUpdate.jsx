import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import PlayerForm from '../components/PlayerForm'

const PlayerUpdate = () => {
    const { id } = useParams();
    const [errors, setErrors] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [player, setPlayer] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/players/${id}`)
            .then((res) => {setPlayer(res.data[0]) // returns you an object in an array so use [0] to grab the data
                setLoaded(true)
            })
            .catch((error) => {
                navigate("/error")
            });
        }, [id])

    const updatePlayer = (player) => {
        axios
            .put(`http://127.0.0.1:8000/api/players/${id}/edit`, player)
            .then((res) => {
                navigate("/error");
            })
            .catch((error) => {
                console.log("hello")
                const errorResponse = error.response.data.error.errors;
                console.log(errorResponse)
                const errorArr = [];
                console.log(error)
                for (const key in errorResponse) {
                    errorArr.push(errorResponse[key].message);
                }
                setErrors(errorArr);
                navigate("/error")
            });
    };
    return (
        <div>
            <Link to="/">Home</Link>
            <h1>Favorite Players</h1>
            <h4>Edit Player:</h4>
            {errors.map((error, index) => (<p key={index}>{error}</p>))}
            {loaded && (<PlayerForm onSubmitProp={updatePlayer} initialName={player.name} initialPosition={player.position}/>)}
        </div>
    )
}

export default PlayerUpdate