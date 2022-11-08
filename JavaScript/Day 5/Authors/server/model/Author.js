import mongoose from 'mongoose'
const { Schema, model } = mongoose

const authorSchema = new Schema(
    {
    name: {
        type: String,
        required: [true, "The {PATH} is required."],
        minLength: [3, "The {PATH} should be minimum {MINLENGTH} characters."]
    },
    created_at: {
        type: Date,
        default: () => Date.now(),
        immutable: true
    }
});

const Author = model("Author", authorSchema)

export default Author