import mongoose from 'mongoose'
const { Schema, model } = mongoose

const pirateSchema = new Schema(
    {
    name: {
        type: String,
        required: [true, "The name is required."],
        minLength: [3, "The name should be minimum 3 characters."]
    },
    imgUrl: {
        data: Buffer,
        type: String,
        required: [true, "The img field is required"],
        minLength: [1, "The url is required"]
    },
    treasures: {
        type: Number,
        required: [true, "The treasure field is required"]
    },
    catchPhrase: {
        type: String,
        required: [true, "The catch phrase field is required"],
        minLength: [5, "The catch phrase should be minimum 5 characters"]
    },
    position: {
        type: String,
        required: [true, "The crew position field is required"],
        minLength: [4, "The crew position should be minimum 4 characters"]
    },
    pegLeg: {
        type: Boolean,
        default: true,
    },
    eyePatch: {
        type: Boolean,
        default: true,
    },
    hookHand: {
        type: Boolean,
        default: true,
    },
    created_at: {
        type: Date,
        default: () => Date.now(),
        immutable: true
    }
});

const Pirate = model("Pirate", pirateSchema)

export default Pirate