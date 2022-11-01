import mongoose from 'mongoose'
const { Schema, model } = mongoose

const productSchema = new Schema(
    {
    title: {
        type: String,
        required: [true, "The title is required."],
        minLength: [2, "The title should be minimum 2 characters."]
    },
    price: {
        type: String,
        required: [true, "The price is a required."],
        minLength: [1, "The price should be minimum 1 characters."]
    },
    description: {
        type: String,
        required: [true, "Description is required"],
        minLength: [5, "The description should be minimum 5 charadcters long"]
    },
    created_at: {
        type: Date,
        default: () => Date.now(),
        immutable: true
    }
});

const Product = model("Product", productSchema)

export default Product