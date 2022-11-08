import Review from "../models/Review.js"

class ReviewService {
    static findAllReviews = async (res) => {
        try {
            return res.status(200).json(await Review.find())
        } catch (err) {
            return res.status(500).json(err)
        }
    }

    static findOneReview = async (req, res) => {
        try {
            return res.status(200).json(await Review.findOne({ _id: req.params.id }))
        } catch (err) {
            return res.status(404).json({ message: "Something went wrong", error: err })
        }
    }

    static createReview = async (req, res) => {
        try {
            return res.status(201).json(await Review.create(req.body))
        } catch (err) {
            return res.status(422).json({ message: "Something went wrong", error: err })
        }
    }

    static updateReview = async (req, res) => {
        try {
            const review = await Review.findOneAndUpdate({ _id: req.params.id }, {new: true, runValidators: [true, "{PATH} is required"]});
            review.name = req.body.name
            review.rating = req.body.rating
            review.review = req.body.review
            return res.status(200).json(await review.save())
        } catch (err) {
            return res.status(422).json({ message: "Something went wrong", error: err })
        }
    }

    static deleteReview = async (req, res) => {
        try {
            return res.status(200).json(await Review.deleteOne({ _id: req.params.id }))
        } catch (err) {
            return res.status(404).json({ message: "Something went wrong", error: err })
        }
    }
}

export default ReviewService