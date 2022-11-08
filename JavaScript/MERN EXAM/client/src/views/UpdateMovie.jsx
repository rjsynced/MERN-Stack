import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import PirateForm from '../components/PirateForm'

const UpdatePirate = () => {
    const { id } = useParams();
    const [errors, setErrors] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [pirate, setPirate] = useState({});
    

    const navigate = useNavigate();
    

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/pirates/${id}`)
            .then((res) => {setPirate(res.data[0]) // returns you an object in an array so use [0] to grab the data
                setLoaded(true)
            })
            .catch((error) => {console.log(error)
            });
        }, [id])

    const updatePirate = (pirate) => {
        axios
            .put(`http://127.0.0.1:8000/api/pirates/${id}/edit`, pirate)
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
            });
    };
    return (
        <div>
            <Link to="/">Home</Link>
            <h1>{pirate.name}</h1>
            <h4>Edit Pirate:</h4>
            {errors.map((error, index) => (<p key={index}>{error}</p>))}
            {loaded && (<PirateForm onSubmitProp={updatePirate} initialName={pirate.name}/>)}
        </div>
    )
}

export default UpdatePirate