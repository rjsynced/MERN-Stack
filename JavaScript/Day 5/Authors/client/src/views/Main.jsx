import React, { useEffect, useState } from 'react'
// import AuthorForm from '../components/AuthorForm';
import DeleteButton from '../components/DeleteButton';
import { Link, Outlet } from 'react-router-dom';
import axios from 'axios'

const Main = () => {
    const [authors, setAuthors] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/authors')
            .then(res => {
                setAuthors(res.data);
            })
            .catch(err => console.error(err));
    }, [authors]);

    const removeFromDom = (productId) => {
        setAuthors(authors.filter((product) => product._id != productId));
    };

    return (
        <div>
            <h1>Favorite authors</h1>
            <Link to='/authors/new'>Add an author</Link>
            <p>We have quotes by: </p>
            <table className='table'>
                <thread>
                    <tr>
                        <th scope='col'>Author</th>
                        <th scope='col'>Actions Available</th>
                    </tr>
                </thread>
                <tbody>
                    {
                        authors.sort((a, b) => {
                            if (a.name < b.name) { return -1; }
                            if (a.name > b.name) { return 1; }
                            return 0;
                        })
                            .map((author, index) => {
                                return (
                                    <tr key={index}>
                                        <td>
                                            <Link to={`/authors/${author._id}`} key={index}>{author.name}</Link>
                                        </td>
                                        <td>
                                            <div>
                                                <Link to={`/authors/${author._id}/edit`} key={index}> Edit</Link>
                                                <DeleteButton authorId={author._id} successCallback={() => removeFromDom(author._id)} />
                                            </div>
                                        </td>
                                    </tr>
                                );
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Main;