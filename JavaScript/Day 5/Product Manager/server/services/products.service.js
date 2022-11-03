import Product from "../models/Product.js"

class ProductService {
    static findAllProducts = async (res) => {
        try {
            return res.status(200).json(await Product.find())
        } catch (err) {
            return res.status(500).json(err)
        }
    }

    static findOneProduct = async (req, res) => {
        try {
            return res.status(200).json(await Product.find({ _id: req.params.id }))
        } catch (err) {
            return res.status(404).json({ error: "Something went wrong" })
        }
    }

    static createProduct = async (req, res) => {
        try {
            return res.status(201).json(await Product.create(req.body))
        } catch (err) {
            return res.status(422).json({ error: "Something went wrong" })
        }
    }

    static updateProduct = async (req, res) => {
        try {
            const product = await Product.findOne({ _id: req.params.id })
            product.title = req.body.title
            product.price = req.body.price
            product.description = req.body.description
            return res.status(200).json(await product.save())
        } catch (err) {
            return res.status(422).json({ error: "Something went wrong" })
        }
    }

    static deleteProduct = async (req, res) => {
        try {
            return res.status(200).json(await Product.remove({ _id: req.params.id }))
        } catch (err) {
            return res.status(404).json({ error: "Something went wrong" })
        }
    }
}

export default ProductService