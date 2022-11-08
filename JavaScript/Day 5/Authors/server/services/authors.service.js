import Author from "../model/Author.js"

class AuthorService {
    static findAllAuthors = async (res) => {
        try {
            return res.status(200).json(await Author.find())
        } catch (err) {
            return res.status(500).json(err)
        }
    }

    static findOneAuthor = async (req, res) => {
        try {
            return res.status(200).json(await Author.find({ _id: req.params.id }))
        } catch (err) {
            return res.status(404).json({ error: "Something went wrong" })
        }
    }

    static createAuthor = async (req, res) => {
        try {
            return res.status(201).json(await Author.create(req.body))
        } catch (err) {
            return res.status(422).json({ error: "Something went wrong" })
        }
    }

    static updateAuthor = async (req, res) => {
        try {
            const author = await Author.findOne({ _id: req.params.id }, {new: true, runValidators: [true, "{PATH} is required"]});
            author.name = req.body.name
            return res.status(200).json(await author.save())
        } catch (err) {
            return res.status(422).json({ error: err })
        }
    }

    static deleteAuthor = async (req, res) => {
        try {
            return res.status(200).json(await Author.remove({ _id: req.params.id }))
        } catch (err) {
            return res.status(404).json({ error: "Something went wrong" })
        }
    }
}

export default AuthorService