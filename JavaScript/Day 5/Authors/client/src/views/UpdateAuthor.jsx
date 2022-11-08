import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import AuthorForm from '../components/AuthorForm'

const UpdateAuthors = () => {
    const { id } = useParams();
    const [errors, setErrors] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [author, setAuthor] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/authors/${id}`)
            .then((res) => {setAuthor(res.data[0]) // returns you an object in an array so use [0] to grab the data
                setLoaded(true)
            })
            .catch((error) => {
                navigate("/error")
            });
        }, [id])

    const updateAuthor = (author) => {
        axios
            .put(`http://127.0.0.1:8000/api/authors/${id}/edit`, author)
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
            <h1>Favorite Authors</h1>
            <h4>Edit Author:</h4>
            {errors.map((error, index) => (<p key={index}>{error}</p>))}
            {loaded && (<AuthorForm onSubmitProp={updateAuthor} initialName={author.name}/>)}
        </div>
    )
}

export default UpdateAuthors