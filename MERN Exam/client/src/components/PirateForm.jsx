import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'

const initialState = {
    name: "",
    imgUrl: "",
    treasures: "",
    catchPhrase: "",
    position: "",
    pegLeg: true,
    eyePatch: true,
    hookHand: true
}
const PirateForm = (props) => {
    const [values, setValues] = useState(initialState)
    const [errors, setErrors] = useState(initialState)
    const [serverErrors, setServerErrors] = useState(initialState)
    const [isValid, setIsValid] = useState(false)
    const { id } = useParams()
    const navigate = useNavigate()
    useEffect(() => {
        if (id) {
            axios.get(`http://127.0.0.1:8000/api/pirates/${id}`)
                .then(res => setValues(res.data[0]))
                .catch(err => console.log(err))
        }
    }, [id])
    const handleCancel = () => {
        navigate('/')
    }

    const handleChange = (e) => {
        if (e.target.type === 'checkbox') {
            setValues({ ...values, [e.target.name]: e.target.checked })
        } else {
            setValues({ ...values, [e.target.name]: e.target.value })
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if (isValid && !id) {
            axios.post('http://127.0.0.1:8000/api/pirates/new',
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
            axios.put(`http://127.0.0.1:8000/api/pirates/${id}/edit`,
                values
            )
                .then(res => {
                    console.log('hello response');
                    setServerErrors(initialState)
                    setValues(initialState)
                    setErrors(initialState)
                    navigate('/')
                })
                .catch(err => {
                    console.log('hello error');
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
        if (fieldName === 'name') {
            if (value.length < 1) {
                setErrors({ ...errors, [fieldName]: "Name is required!" });
                isValidSubmission = false
            } else if (value.length < 3) {
                setErrors({ ...errors, [fieldName]: "Name must be 3 characters or longer!" });
                isValidSubmission = false
            } else {
                setErrors({ ...errors, [fieldName]: "" });
            }
        }
        setIsValid(isValidSubmission)
        if (fieldName === 'imgUrl') {
            if (value.length < 1) {
                setErrors({ ...errors, [fieldName]: "Img is required!" });
                isValidSubmission = false
            } else if (value.length < 1) {
                setErrors({ ...errors, [fieldName]: "Name must be 1 characters or longer!" });
                isValidSubmission = false
            } else {
                setErrors({ ...errors, [fieldName]: "" });
            }
        }
        setIsValid(isValidSubmission)
        if (fieldName === 'treasures') {
            if (value < 0) {
                setErrors({ ...errors, [fieldName]: "Treasure is required!" });
                isValidSubmission = false
            } else if (value.length < 1) {
                setErrors({ ...errors, [fieldName]: "Treasure must be 1 characters or longer!" });
                isValidSubmission = false
            } else {
                setErrors({ ...errors, [fieldName]: "" });
            }
        }
        setIsValid(isValidSubmission)
        if (fieldName === 'catchPhrase') {
            if (value.length < 1) {
                setErrors({ ...errors, [fieldName]: "Name is required!" });
                isValidSubmission = false
            } else if (value.length < 5) {
                setErrors({ ...errors, [fieldName]: "Name must be 5 characters or longer!" });
                isValidSubmission = false
            } else {
                setErrors({ ...errors, [fieldName]: "" });
            }
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='name'>Pirate Name: </label>
                    <input name='name' type="text" value={values.name} onChange={handleChange} onBlur={handleValidation} />
                    {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
                    {serverErrors.name && <p style={{ color: 'green' }}>{serverErrors.name}</p>}
                </div>
                <div>
                    <label htmlFor='imgUrl'>Image Url: </label>
                    <input name='imgUrl' type="text" value={values.imgUrl} onChange={handleChange} onBlur={handleValidation} />
                    {errors.imgUrl && <p style={{ color: 'red' }}>{errors.imgUrl}</p>}
                    {serverErrors.imgUrl && <p style={{ color: 'green' }}>{serverErrors.imgUrl}</p>}
                </div>
                <div>
                    <label htmlFor='treasure'># of Treasure Chests: </label>
                    <input name='treasures' type="number" value={values.treasures} onChange={handleChange} onBlur={handleValidation} />
                    {errors.treasures && <p style={{ color: 'red' }}>{errors.treasures}</p>}
                    {serverErrors.treasures && <p style={{ color: 'green' }}>{serverErrors.treasures}</p>}
                </div>
                <div>
                    <label htmlFor='catchPhrase'>Pirate Catch Phrase: </label>
                    <input name='catchPhrase' type="text" value={values.catchPhrase} onChange={handleChange} onBlur={handleValidation} />
                    {errors.catchPhrase && <p style={{ color: 'red' }}>{errors.catchPhrase}</p>}
                    {serverErrors.catchPhrase && <p style={{ color: 'green' }}>{serverErrors.catchPhrase}</p>}
                </div>
                <div>
                    <label htmlFor='position'>CrewPosition: </label>
                    <select name="position" id="position" value={values.position} onChange={handleChange}>
                        <option hidden value="">-- Please Select a Position --</option>
                        <option name="captain" onBlur={handleValidation}>Captain</option>
                        <option value="first mate">First Mate</option>
                        <option value="quarter master">Quarter Master</option>
                        <option value="boat swain">Boatswain</option>
                        <option value="powder monkey">Powder Monkey</option>
                    </select>
                    {errors.position && <p style={{ color: 'red' }}>{errors.position}</p>}
                </div>
                <div>
                    <label htmlFor='pegLeg'>Peg Leg: </label>
                    <input type="checkbox" name="pegLeg" checked={values.pegLeg} onChange={handleChange}  />
                </div>
                <div>
                    <label htmlFor='eyePatch'>Eye Patch: </label>
                    <input type="checkbox" name="eyePatch" checked={values.eyePatch} onChange={handleChange}  />
                </div>
                <div>
                    <label htmlFor='hookHand'>Hook Hand: </label>
                    <input type="checkbox" name="hookHand" checked={values.hookHand} onChange={handleChange}  />
                </div>
                <button className='Submit'>Submit Form</button>
            </form>
            <button onClick={() => handleCancel()}>Cancel</button>
        </div>
    )
}

export default PirateForm