import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'

const initialState = {
    brand: "",
    type: "",
    imgUrl: "",
    price: "",
    description: "",
    likes: 0,
    returnable: false,
    cleaned: false,
    under50: false
}

const ItemForm = (props) => {
    const [values, setValues] = useState(initialState)
    const [errors, setErrors] = useState(initialState)
    const [serverErrors, setServerErrors] = useState(initialState)
    const [isValid, setIsValid] = useState(false)
    const { id } = useParams()
    const navigate = useNavigate()
    useEffect(() => {
        if (id) {
            axios.get(`http://127.0.0.1:8000/api/items/${id}`)
                .then(res => setValues(res.data))
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
        if (!id) {
            axios.post('http://127.0.0.1:8000/api/items/new',
                values
            )
                .then(res => {
                    setServerErrors(initialState)
                    setValues(initialState)
                    setErrors(initialState)
                    navigate('/')
                })
                .catch(err => {
                    console.log('hello')
                    const errorResponse = err.response.data.error.errors
                    console.log(errorResponse)
                    
                    const errorArr = []
                    for (const key in errorResponse) {
                        errorArr.push(errorResponse[key].message)
                    }
                    console.log(errorArr)
                setServerErrors(errorArr)
                console.log(serverErrors);
                })
        }
        else if (id) {
            console.log('running');
            axios.put(`http://127.0.0.1:8000/api/items/${id}/edit`,
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
                console.log(errorArr)
                for (const key in errorResponse) {
                    errorArr.push(errorResponse[key].message)
                }
                setServerErrors(errorArr)
                console.log(errorArr);
                })
        }
    }
    const handleValidation = (e) => {
        let isValidSubmission = true
        const fieldName = e.target.name
        const value = e.target.value
        if (fieldName === 'brand') {
            if (value.length < 1) {
                setErrors({ ...errors, [fieldName]: "Brand is required!" });
                isValidSubmission = false
            } else if (value.length < 2) {
                setErrors({ ...errors, [fieldName]: "Brand must be 2 characters or longer!" });
                isValidSubmission = false
            } else {
                setErrors({ ...errors, [fieldName]: "" });
            }
        }
        setIsValid(isValidSubmission)
        if (fieldName === 'type') {
            if (value.length < 1) {
                setErrors({ ...errors, [fieldName]: "Brand type is required!" });
                isValidSubmission = false
            } else if (value.length < 2) {
                setErrors({ ...errors, [fieldName]: "Brand type must be 2 characters or longer!" });
                isValidSubmission = false
            } else {
                setErrors({ ...errors, [fieldName]: "" });
            }
        }
        if (fieldName === 'imgUrl') {
            if (value.length < 1) {
                setErrors({ ...errors, [fieldName]: "Image is required!" });
                isValidSubmission = false
            } else if (value.length < 10) {
                setErrors({ ...errors, [fieldName]: "Image url must be 10 characters or longer!" });
                isValidSubmission = false
            } else {
                setErrors({ ...errors, [fieldName]: "" });
            }
        }
        setIsValid(isValidSubmission)
        if (fieldName === 'price') {
            if (value.length < 0) {
                setErrors({ ...errors, [fieldName]: "Price is required!" });
                isValidSubmission = false
            } else if (value.length < 1) {
                setErrors({ ...errors, [fieldName]: "Price must be 1 character or longer!" });
                isValidSubmission = false
            } else {
                setErrors({ ...errors, [fieldName]: "" });
            }
        }
        setIsValid(isValidSubmission)
        if (fieldName === 'description') {
            if (value.length < 1) {
                setErrors({ ...errors, [fieldName]: "Description is required!" });
                isValidSubmission = false
            } else if (value.length < 5) {
                setErrors({ ...errors, [fieldName]: "Description must be 5 characters or longer!" });
                isValidSubmission = false
            } else {
                setErrors({ ...errors, [fieldName]: "" });
            }
        }
    }
    return (
        <div className='container'>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='brand'>Brand: </label>
                    <input className='form-control' name='brand' type="text" value={values.brand} onChange={handleChange} onBlur={handleValidation} />
                    {/* {errors.brand && <p style={{ color: 'red' }}>{errors.brand}</p>} */}
                    {/* {id && <p style={{ color: 'green' }}>{serverErrors[0]}</p> } */}
                    {serverErrors[0] && <p style={{ color: 'green' }}>{serverErrors[0]}</p>}
                </div>
                <div>
                    <label htmlFor='type'>Type: </label>
                    <input className='form-control' name='type' type="text" value={values.type} onChange={handleChange} onBlur={handleValidation} />
                    {/* {errors.type && <p style={{ color: 'red' }}>{errors.type}</p>} */}
                    {serverErrors[1] && <p style={{ color: 'green' }}>{serverErrors[1]}</p>}
                </div>
                <div>
                    <label htmlFor='imgUrl'>Image Url: </label>
                    <input className='form-control' name='imgUrl' type="text" value={values.imgUrl} onChange={handleChange} onBlur={handleValidation} />
                    {/* {errors.imgUrl && <p style={{ color: 'red' }}>{errors.imgUrl}</p>} */}
                    {serverErrors[2] && <p style={{ color: 'green' }}>{serverErrors[2]}</p>}
                </div>
                <div>
                    <label htmlFor='price'>Price: </label>
                    <input className='form-control' name='price' type="number" value={values.price} onChange={handleChange} onBlur={handleValidation} />
                    {/* {errors.price && <p style={{ color: 'red' }}>{errors.price}</p>} */}
                    {serverErrors[3] && <p style={{ color: 'green' }}>{serverErrors[3]}</p>}
                </div>
                <div>
                    <label htmlFor='description'>Description: </label>
                    <input className='form-control' name='description' type="text" value={values.description} onChange={handleChange} onBlur={handleValidation} />
                    {/* {errors.description && <p style={{ color: 'red' }}>{errors.description}</p>} */}
                    {serverErrors[4] && <p style={{ color: 'green' }}>{serverErrors[4]}</p>}
                </div>
                <div>
                    <label htmlFor='returnable'>Returnable: </label>
                    <input type="checkbox" name="returnable" checked={values.returnable} onChange={handleChange}  />
                </div>
                <div>
                    <label htmlFor='cleaned'>Cleaned: </label>
                    <input type="checkbox" name="cleaned" checked={values.cleaned} onChange={handleChange}  />
                </div>
                <div>
                    <label htmlFor='under50'>Under $50: </label>
                    <input type="checkbox" name="under50" checked={values.under50} onChange={handleChange}  />
                </div>
                <button className='btn btn-success'>Submit Form</button>
            </form>
            <button className='btn btn-danger' onClick={() => handleCancel()}>Cancel</button>
        </div>
    )
}

export default ItemForm