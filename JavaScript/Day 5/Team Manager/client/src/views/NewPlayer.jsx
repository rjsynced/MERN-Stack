import React from 'react'
import PlayerForm from '../components/PlayerForm'
import axios from 'axios'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const NewPlayer = () => {

    const [errors, setErrors] = useState([]);

    const navigate = useNavigate();

    const createPlayer = (player) => {
        axios
            .post('http://127.0.0.1:8000/api/players/new', player)
            .then((res) => {
                console.log(res)
                navigate(`/`)
        })
            .catch((error) => {
                const errorResponse = error.response.data.errors
                const errorArr = []

                for (const key in errorResponse) {
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr)
            });
    };

    return (
        <>
            <div>
                <Link to="/">Home</Link>
            </div>
            <h1>Favorite Players</h1>
            <h4>Add a new player:</h4>
            {errors.map((error, index) => ( <p key={index}>{error}</p>))}
            <PlayerForm onSubmitProp={createPlayer} initialName="" initialPosition=""  errors={errors}/>
        </>
    )
}

export default NewPlayer