import Joke from "../models/Joke.js";

class JokeService {
    static findAllJokes = async (res) => {
        try {
            return res.status(200).json(await Joke.find())
        } catch (err) {
            return res.status(500).json(err)
        }
    }

    static findOneJoke = async (req, res) => {
        try {
            return res.status(200).json(await Joke.find({ _id: req.params._id }))
        } catch (err) {
            return res.status(404).json({ error: "Something went wrong" })
        }
    }

    static createJoke = async (req, res) => {
        try {
            return res.status(201).json(await Joke.create(req.body))
        } catch (err) {
            return res.status(422).json(err)
        }
    }

    static updateJoke = async (req, res) => {
        try {
            const joke = await Joke.findOne({ _id: req.params._id })
            joke.setup = req.body.setup
            joke.punchline = req.body.punchline
            return res.status(200).json(await joke.save())
        } catch (err) {
            return res.status(422).json(err)
        }
    }

    static deleteJoke = async (req, res) => {
        try {
            return res.status(200).json(await Joke.remove({ _id: req.params._id }))
        } catch (err) {
            return res.status(404).json({ error: "Something went wrong" })
        }
    }
}

export default JokeService