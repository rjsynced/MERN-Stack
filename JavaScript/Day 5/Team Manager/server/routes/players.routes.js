import express from 'express'
import PlayerService from '../services/players.service.js'

const playersRouter = new express.Router()

playersRouter.get("/players/list", (req, res) => PlayerService.findAllPlayers(res))
playersRouter.get("/players/list/:id", (req, res) => PlayerService.findOnePlayer(req, res))
playersRouter.post("/players/addplayer", (req, res) => PlayerService.createPlayer(req, res))
playersRouter.put("/players/edit/:id", (req, res) => PlayerService.updatePlayer(req, res))
playersRouter.delete("/players/list/:id", (req, res) => PlayerService.deletePlayer(req, res))

export default playersRouter

