import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import ItemForm from '../components/ItemForm'

const UpdateItem = () => {
    const { id } = useParams();
    const [errors, setErrors] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [item, setItem] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/items/${id}`)
            .then((res) => {setItem(res.data[0]) // returns you an object in an array so use [0] to grab the data
                setLoaded(true)
            })
            .catch((error) => {console.log(error)
            });
        }, [id])

    const updateItem = (item) => {
        axios
            .put(`http://127.0.0.1:8000/api/items/${id}/edit`, item)
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
            <h1>hello</h1>
            <h4>Edit Item:</h4>
            {errors.map((error, index) => (<p key={index}>{error}</p>))}
            {loaded && (<ItemForm onSubmitProp={updateItem} />)}
        </div>
    )
}

export default UpdateItem