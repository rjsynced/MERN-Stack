import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import DeleteButton from './DeleteButton'

const AuthorList = (props) => {
    
    const [author, setAuthor] = useState([])
    
    useEffect(() => {
        axios
            .get("http://127.0.0.1:8000/api/authors")
            .then((res) => setAuthor(res.data));
    }, []);

    const removeFromDom = (productId) => {
        setAuthor(author.filter((author) => author._id != productId));
    };
    
    return (
        <div>
            <h1>All Authors: </h1>
            {author.map((author, indx) => {

                return (
                    <p key={indx}>
                        <Link to={`/authors/${author._id}`}>{author.title}</Link><br />
                        <Link to={`/authors/${author._id}/edit`}>Edit</Link><span>     </span>
                        | <span>     </span>
                        <DeleteButton 
                            productId={author._id}
                            successCallback={()=>removeFromDom(author._id)}
                        />
                    </p>
                )
            })}
        </div>
    )
}

export default AuthorList