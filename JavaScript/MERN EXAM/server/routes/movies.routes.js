import express from 'express'
import MovieService from '../services/movies.service.js'
import ReviewService from '../services/reviews.service.js'
const moviesRouter = new express.Router()

moviesRouter.get("/movies", (req, res) => MovieService.findAllMovies(res))
moviesRouter.get("/movies/:id", (req, res) => MovieService.findOneMovie(req, res))
moviesRouter.post("/movies/new", (req, res) => MovieService.createMovie(req, res))
moviesRouter.get("/movies/:id/reviews", (req, res) => ReviewService.findAllReviews(res))
moviesRouter.post("/movies/:id/reviews", (req, res) => ReviewService.createReview(req, res))
moviesRouter.delete("/movies/:id/reviews/:id", (req, res) => ReviewService.deleteReview(req, res))

export default moviesRouter