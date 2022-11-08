import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'


const initialState = {
    name: "",
    position: "",
    status: {
        gameOne: 'undecided',
        gameTwo: 'undecided',
        gameThree: 'undecided'
    }
}
const PlayerForm = (props) => {
    const [values, setValues] = useState(initialState)
    const [errors, setErrors] = useState(initialState)
    const [serverErrors, setServerErrors] = useState(initialState)
    const [isValid, setIsValid] = useState(false)
    const { id } = useParams()
    const navigate = useNavigate()
    
    useEffect(() => {
        if (id) {
            axios.get(`http://127.0.0.1:8000/api/players/${id}`)
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
            axios.post('http://127.0.0.1:8000/api/players',
                values
            )
                .then(res => {
                    setServerErrors(initialState)
                    setValues(initialState)
                    setErrors(initialState)
                    navigate('/')
                })
                .catch(err => {
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
            axios.put(`http://127.0.0.1:8000/api/players/${id}/edit`,
                values
            )
                .then(res => {
                    setServerErrors(initialState)
                    setValues(initialState)
                    setErrors(initialState)
                    navigate('/')
                })
                .catch(err => {
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
        if (fieldName === 'name') {
            if (value.length < 1) {
                setErrors({ ...errors, [fieldName]: "Name is required!" });
                isValidSubmission = false
            } else if (value.length < 2) {
                setErrors({ ...errors, [fieldName]: "Name must be 2 characters or longer!" });
                isValidSubmission = false
            } else {
                setErrors({ ...errors, [fieldName]: "" });
            }
        }
        setIsValid(isValidSubmission)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='name'>Player Name: </label>
                    <input name='name' type="text" value={values.name} onChange={handleChange} onBlur={handleValidation} />
                    {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
                    {serverErrors.name && <p style={{ color: 'green' }}>{serverErrors.name}</p>}
                </div>
                <div>
                    <label htmlFor='position'>Preferred Position: </label>
                    <input position='position' type="text" value={values.position} onChange={handleChange}/>
                </div>
                <button className='Submit'>Submit Form</button>
            </form>
            <button onClick={() => handleCancel()}>Cancel</button>
        </div>
    )
}

export default PlayerForm