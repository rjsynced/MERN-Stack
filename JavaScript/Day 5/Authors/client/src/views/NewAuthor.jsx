import React from 'react'
import AuthorForm from '../components/AuthorForm'
import axios from 'axios'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const NewAuthor = () => {

    const [errors, setErrors] = useState([]);

    const navigate = useNavigate();

    const createAuthor = (author) => {
        axios
            .post('http://127.0.0.1:8000/api/authors/new', author)
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
            <h1>Favorite Authors</h1>
            <h4>Add a new author:</h4>
            {errors.map((error, index) => ( <p key={index}>{error}</p>))}
            <AuthorForm onSubmitProp={createAuthor} initialName="" errors={errors}/>
        </>
    )
}

export default NewAuthor