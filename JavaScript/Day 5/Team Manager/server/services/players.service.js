import Player from "../models/Player.js"

class PlayerService {
    static findAllPlayers = async (res) => {
        try {
            return res.status(200).json(await Player.find())
        } catch (err) {
            return res.status(500).json(err)
        }
    }

    static findOnePlayer = async (req, res) => {
        try {
            return res.status(200).json(await Player.find({ _id: req.params.id }))
        } catch (err) {
            return res.status(404).json({ error: "Something went wrong" })
        }
    }

    static createPlayer = async (req, res) => {
        try {
            return res.status(201).json(await Player.create(req.body))
        } catch (err) {
            return res.status(422).json({ error: "Something went wrong" })
        }
    }

    static updatePlayer = async (req, res) => {
        try {
            const player = await Player.findOneAndUpdate({ _id: req.params.id }, req.body, {
                new:true, runValidators: true
            })
            return res.status(200).json(await player.save())
        } catch (err) {
            return res.status(422).json({ error: "Something went wrong" })
        }
    }

    static deletePlayer = async (req, res) => {
        try {
            return res.status(200).json(await Player.remove({ _id: req.params.id }))
        } catch (err) {
            return res.status(404).json({ error: "Something went wrong" })
        }
    }
}

export default PlayerService