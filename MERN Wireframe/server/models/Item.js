import mongoose from 'mongoose'
const { Schema, model } = mongoose

const itemSchema = new Schema(
    {
    brand: {
        type: String,
        required: [true, "The brand is required."],
    },
    type: {
        type: String,
        required: [true, "The brand type is required"],
    },
    imgUrl: {
        data: Buffer,
        type: String,
        required: [true, "The img field is required"],
    },
    price: {
        type: Number,
        required: [true, "The price is required"]
    },
    description: {
        type: String,
        required: [true, "The description is required"],
    },
    likes: {
        default: 0,
        type: Number,
    },
    returnable: {
        type: Boolean
    },
    cleaned: {
        type: Boolean
    },
    under50: {
        type: Boolean
    },
    created_at: {
        type: Date,
        default: () => Date.now(),
        immutable: true
    }
});

const Item = model("Item", itemSchema)

export default Item