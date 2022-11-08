import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'

const initialState = {
    movieTitle: "",
    name: "",
    rating: "",
    review: ""
}
const MovieForm = (props) => {
    const [values, setValues] = useState(initialState)
    const [errors, setErrors] = useState(initialState)
    const [serverErrors, setServerErrors] = useState(initialState)
    const [isValid, setIsValid] = useState(false)
    const { id } = useParams()
    const navigate = useNavigate()
    useEffect(() => {
        if (id) {
            axios.get(`http://127.0.0.1:8000/api/movies/${id}`)
                .then(res => setValues(res.data[0]))
                .catch(err => console.log(err))
        }
    }, [id])
    const handleCancel = () => {
        navigate('/')
    }

    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (isValid && !id) {
            axios.post('http://127.0.0.1:8000/api/movies/new',
                values
            )
                .then(res => {
                    setServerErrors(initialState)
                    setValues(initialState)
                    setErrors(initialState)
                    navigate('/')
                })
                .catch(err => {
                    console.log(err)
                const errorResponse = err.response.data.error.errors

                const errorArr = []

                for (const key in errorResponse) {
                    errorArr.push(errorResponse[key].message)
                }
                setServerErrors({name: errorArr})
                console.log(serverErrors);
                })
        }
        else if (id) {
            console.log('running');
            axios.put(`http://127.0.0.1:8000/api/movies/${id}/edit`,
                values
            )
                .then(res => {
                    setServerErrors(initialState)
                    setValues(initialState)
                    setErrors(initialState)
                    navigate('/')
                })
                .catch(err => {
                    console.log(err);
                    const errorResponse = err.response.data.error.errors
                const errorArr = []

                for (const key in errorResponse) {
                    errorArr.push(errorResponse[key].message)
                }
                setServerErrors({name: errorArr})
                console.log(serverErrors);
                })
        }
    }
    const handleValidation = (e) => {
        let isValidSubmission = true
        const fieldName = e.target.name
        const value = e.target.value
        if (fieldName === 'movieTitle') {
            if (value.length < 1) {
                setErrors({ ...errors, [fieldName]: "Movie title is required!" });
                isValidSubmission = false
            } else if (value.length < 3) {
                setErrors({ ...errors, [fieldName]: "Movie title must be 3 characters or longer!" });
                isValidSubmission = false
            } else {
                setErrors({ ...errors, [fieldName]: "" });
            }
        }
        setIsValid(isValidSubmission)
        if (fieldName === 'name') {
            if (value.length < 1) {
                setErrors({ ...errors, [fieldName]: "Your name is required!" });
                isValidSubmission = false
            } else if (value.length < 2) {
                setErrors({ ...errors, [fieldName]: "Name must be 2 characters or longer!" });
                isValidSubmission = false
            } else {
                setErrors({ ...errors, [fieldName]: "" });
            }
        }
        setIsValid(isValidSubmission)
        if (fieldName === 'rating') {
            if (value.length < 1) {
                setErrors({ ...errors, [fieldName]: "Rating is required!" });
                isValidSubmission = false
            } else if (value.length < 1) {
                setErrors({ ...errors, [fieldName]: "Rating must be 1 character or longer!" });
                isValidSubmission = false
            } else {
                setErrors({ ...errors, [fieldName]: "" });
            }
        }
        setIsValid(isValidSubmission)
        if (fieldName === 'review') {
            if (value.length < 1) {
                setErrors({ ...errors, [fieldName]: "Review is required!" });
                isValidSubmission = false
            } else if (value.length < 5) {
                setErrors({ ...errors, [fieldName]: "Review must be 5 characters or longer!" });
                isValidSubmission = false
            } else {
                setErrors({ ...errors, [fieldName]: "" });
            }
        }
    }
    return (
        <div className='container'>
            <form onSubmit={handleSubmit}>
                <div className='card'>
                    <div className='form-group'>
                        <label htmlFor='movieTitle'>Movie Title: </label>
                        <input class="form-control" name='movieTitle' type="text" value={values.movieTitle} onChange={handleChange} onBlur={handleValidation} />
                        {errors.movieTitle && <p style={{ color: 'red' }}>{errors.movieTitle}</p>}
                        {serverErrors.movieTitle && <p style={{ color: 'green' }}>{serverErrors.movieTitle}</p>}
                    </div>
                    <div className='form-group'>
                        <label htmlFor='name'>Your Name: </label>
                        <input class="form-control" name='name' type="text" value={values.name} onChange={handleChange} onBlur={handleValidation} />
                        {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
                        {serverErrors.name && <p style={{ color: 'green' }}>{serverErrors.name}</p>}
                    </div>
                    <div className='form-group'>
                        <label htmlFor='rating'>Rating: </label>
                        <input class="form-control" name='rating' type="number" value={values.rating} onChange={handleChange} onBlur={handleValidation} />
                        {errors.rating && <p style={{ color: 'red' }}>{errors.rating}</p>}
                        {serverErrors.rating && <p style={{ color: 'green' }}>{serverErrors.rating}</p>}
                    </div>
                    <div className='form-group'>
                        <label htmlFor='review'>Review: </label>
                        <input class="form-control" name='review' type="textarea" value={values.review} onChange={handleChange} onBlur={handleValidation} />
                        {errors.review && <p style={{ color: 'red' }}>{errors.review}</p>}
                        {serverErrors.review && <p style={{ color: 'green' }}>{serverErrors.review}</p>}
                    </div>
                </div>
                <button className='Submit'>Submit Form</button>
            </form>
            <button onClick={() => handleCancel()}>Cancel</button>
        </div>
    )
}

export default MovieForm