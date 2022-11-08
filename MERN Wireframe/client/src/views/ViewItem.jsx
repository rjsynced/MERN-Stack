import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router';
// import { Link } from 'react-router-dom';
import DeleteButton from '../components/DeleteButton';

const ViewItem = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [items, setItems] = useState({});
    const [likes, setLikes] = useState();

    useEffect( () => {
        axios.get(`http://127.0.0.1:8000/api/items/${id}`)
            .then(res => setItems(res.data))
            .catch((err) => console.log(err)
    )}, [id])

    const handleCancel = () => {
        navigate('/')
    }

    const handleEditOne = () => {
        navigate(`/items/${id}/edit`)
    }

    const handleChange = (e) => {
        const req = {_id: e.target.name, 
            likes: e.target.value
        }  
        axios.put(`http://127.0.0.1:8000/api/items/${id}/edit`, req)
            .then(res => setItems(res.data))
            .catch((err) => console.log(err)
    )}

    return (
        <>
            <h2>Item: {items.brand} {items.type} </h2>
            <img src={items.imgUrl} alt="pic" />
            <p>Price: ${items.price} </p>
            <p>Description: {items.description} </p>
            <label>Returnable: {items.returnable ? "Yes" : "No"}</label><br />
            <label>Cleaned: {items.cleaned ? "Yes" : "No"}</label><br />
            <label>under50: {items.under50 ? "Yes" : "No"}</label><br />
            <div>
                <p>Likes: {items.likes}</p>
                <button 
                    className='btn btn-success'
                    id='button'
                    name={items._id}
                    value={items.likes}
                    onClick={() => {handleChange}}
                >Like This Item</button>
            </div>
            <button className='btn btn-warning' onClick={handleCancel}>Cancel</button><br />
            <button className='btn btn-primary' onClick={handleEditOne}>Edit Item</button>
            <DeleteButton itemId={items._id} successCallback={() => navigate('/')}/>
        </>
    )
}

export default ViewItem