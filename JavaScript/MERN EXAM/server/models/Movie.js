import mongoose from 'mongoose'
const { Schema, model } = mongoose

const movieSchema = new Schema(
    {
    movieTitle: {
        type: String,
        required: [true, "The movie title is required."],
    },
    name: {
        type: String,
        required: [true, "The name is required"],
    },
    rating: {
        type: Number,
        required: [true, "The rating is required"]
    },
    review: {
        type: String,
        required: [true, "The review is required"],
    },
    created_at: {
        type: Date,
        default: () => Date.now(),
        immutable: true
    }
});

const Movie = model("Movie", movieSchema)

export default Movie