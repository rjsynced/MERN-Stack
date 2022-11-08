import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import DeleteButton from '../components/DeleteButton';

const ViewAuthors = () => {
    const [author, setAuthor] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect( () => {
        axios.get(`http://127.0.0.1:8000/api/authors/${id}`)
            .then(res => setAuthor(res.data[0]))
            .catch((err) => navigate('/error'));
    }, [id])
    return (
        <>
            <h2>Author: {author.name}</h2>
            <Link to={`/authors/${author._id}/edit`}>Update Product</Link>
            <DeleteButton productId={author._id} successCallback={() => navigate('/')}/>
        </>
    )
}

export default ViewAuthors