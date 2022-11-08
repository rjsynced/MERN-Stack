import Item from "../models/Item.js"

class ItemService {
    static findAllItems = async (res) => {
        try {
            return res.status(200).json(await Item.find())
        } catch (err) {
            return res.status(500).json(err)
        }
    }

    static findOneItem = async (req, res) => {
        try {
            return res.status(200).json(await Item.findOne({ _id: req.params.id }))
        } catch (err) {
            return res.status(404).json({ message: "Something went wrong", error: err })
        }
    }

    static createItem = async (req, res) => {
        try {
            return res.status(201).json(await Item.create(req.body))
        } catch (err) {
            return res.status(422).json({ message: "Something went wrong", error: err })
        }
    }

    static updateItem = async (req, res) => {
        try {
            const item = await Item.findOneAndUpdate({ _id: req.params.id }, {new: true, runValidators: [true, "{PATH} is required"]});
            item.brand = req.body.brand
            item.type = req.body.type
            item.imgUrl = req.body.imgUrl
            item.price = req.body.price
            item.description = req.body.description
            item.likes = req.body.likes
            item.returnable = req.body.returnable
            item.cleaned = req.body.cleaned
            item.under50 = req.body.under50
            return res.status(200).json(await item.save())
        } catch (err) {
            return res.status(422).json({ message: "Something went wrong", error: err })
        }
    }
    
    static likeItem = async (req, res) => {
        try {
            return res.status(200).json(await Item.findOneAndUpdate(
                { _id: req.params.id }, 
                {$inc: {likes: 1}}
            ))} catch (err) {
            return res.status(404).json({ message: "Something went wrong", error: err })
        }
    }

    static deleteItem = async (req, res) => {
        try {
            return res.status(200).json(await Item.deleteOne({ _id: req.params.id }))
        } catch (err) {
            return res.status(404).json({ message: "Something went wrong", error: err })
        }
    }
}

export default ItemService