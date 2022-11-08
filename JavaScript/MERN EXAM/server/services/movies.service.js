import Movie from "../models/Movie.js"

class MovieService {
    static findAllMovies = async (res) => {
        try {
            return res.status(200).json(await Movie.find())
        } catch (err) {
            return res.status(500).json(err)
        }
    }

    static findOneMovie = async (req, res) => {
        try {
            return res.status(200).json(await Movie.find({ _id: req.params.id }))
        } catch (err) {
            return res.status(404).json({ message: "Something went wrong", error: err })
        }
    }

    static createMovie = async (req, res) => {
        try {
            return res.status(201).json(await Movie.create(req.body))
        } catch (err) {
            return res.status(422).json({ message: "Something went wrong", error: err })
        }
    }

    static updateMovie = async (req, res) => {
        try {
            const movie = await Movie.findOneAndUpdate({ _id: req.params.id }, {new: true, runValidators: [true, "{PATH} is required"]});
            movie.movieTitle = req.body.movieTitle
            movie.name = req.body.name
            movie.rating = req.body.rating
            movie.review = req.body.review
            return res.status(200).json(await movie.save())
        } catch (err) {
            return res.status(422).json({ message: "Something went wrong", error: err })
        }
    }

    static deleteMovie = async (req, res) => {
        try {
            return res.status(200).json(await Movie.deleteOne({ _id: req.params.id }))
        } catch (err) {
            return res.status(404).json({ message: "Something went wrong", error: err })
        }
    }
}

export default MovieService