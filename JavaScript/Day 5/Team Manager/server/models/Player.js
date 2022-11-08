import mongoose from 'mongoose'
const { Schema, model } = mongoose

const playerSchema = new Schema(
    {
    name: {
        type: String,
        required: [true, "The name is a required field."],
        minLength: [2, "The name should be minimum 2 characters."]
    },
    position: {
        type: String
    },
    gameStatus: {
        gameOne: String,
        gameTwo: String,
        gameThree: String
    },
    created_at: {
        type: Date,
        default: () => Date.now(),
        immutable: true
    }
});

const Player = model("Player", playerSchema)

export default Player