import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
// import PirateForm from '../components/PirateForm';
import MovieList from '../components/MovieList';
import axios from 'axios'

const Main = () => {
    const [movies, setMovies] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/movies')
            .then(res => {
                setMovies(res.data);
                setLoaded(true);
            })
            .catch(err => console.error(err));
    }, [movies]);

    const removeFromDom = (movieId) => {
        setMovies(movies.filter((movie) => movie._id != movieId));
    };

    const createMovie = (movie) => {
        axios
            .post('http://127.0.0.1:8000/api/movies', movie)
            .then(
                console.log(movie),
                setMovies(movies => [...movies, movie]),
                setLoaded(false)
            )
            .catch(err => console.log(err))
    }

    return (
        <div>
            <h1>Moldy Tomatoes</h1>
            <Link to="movies/new">Add a new Movie</Link>
            {loaded && <MovieList movies={movies} removeFromDom={removeFromDom}/>}
            
        </div>
    )
}

export default Main;