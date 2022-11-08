import Pirate from "../model/Pirate.js"

class PirateService {
    static findAllPirates = async (res) => {
        try {
            return res.status(200).json(await Pirate.find())
        } catch (err) {
            return res.status(500).json(err)
        }
    }

    static findOnePirate = async (req, res) => {
        try {
            return res.status(200).json(await Pirate.find({ _id: req.params.id }))
        } catch (err) {
            return res.status(404).json({ message: "Something went wrong", error: err })
        }
    }

    static createPirate = async (req, res) => {
        try {
            return res.status(201).json(await Pirate.create(req.body))
        } catch (err) {
            return res.status(422).json({ message: "Something went wrong", error: err })
        }
    }

    static updatePirate = async (req, res) => {
        try {
            const pirate = await Pirate.findOneAndUpdate({ _id: req.params.id }, {new: true, runValidators: [true, "{PATH} is required"]});
            pirate.name = req.body.name
            pirate.imgUrl = req.body.imgUrl
            pirate.treasures = req.body.treasures
            pirate.catchPhrase = req.body.catchPhrase
            pirate.position = req.body.position
            pirate.pegLeg = req.body.pegLeg
            pirate.eyePatch = req.body.eyePatch
            pirate.hookHand = req.body.hookHand
            return res.status(200).json(await pirate.save())
        } catch (err) {
            return res.status(422).json({ message: "Something went wrong", error: err })
        }
    }

    static deletePirate = async (req, res) => {
        try {
            return res.status(200).json(await Pirate.deleteOne({ _id: req.params.id }))
        } catch (err) {
            return res.status(404).json({ message: "Something went wrong", error: err })
        }
    }
}

export default PirateService