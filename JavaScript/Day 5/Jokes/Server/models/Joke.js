import mongoose from 'mongoose'
const { Schema, model } = mongoose

const jokeSchema = new Schema(
    {
    setup: {
        type: String,
        required: [true, "The setup is required."],
        minLength: [8, "The setup should be minimum 8 characters."]
    },
    punchline: {
        type: String,
        required: [true, "The punchline is a required."],
        minLength: [5, "The punchline should be minimum 5 characters."]
    },
    created_at: {
        type: Date,
        default: () => Date.now(),
        immutable: true
    }
});

const Joke = model("Joke", jokeSchema)

export default Joke