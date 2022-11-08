import React from 'react'
import { Link } from 'react-router-dom';

const NoAuthors = () => {
    return (
        <div>
            <p>
                We're sorry, but we could not find the author you are looking for.
                Would you like to add this author to our database?
            </p>
            <Link to="/authors/new">Create Author</Link>
        </div>
    );
}

export default NoAuthors;