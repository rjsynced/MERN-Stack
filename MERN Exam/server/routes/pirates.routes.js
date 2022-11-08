import express from 'express'
import PirateService from '../services/pirates.service.js'

const piratesRouter = new express.Router()

piratesRouter.get("/pirates", (req, res) => PirateService.findAllPirates(res))
piratesRouter.get("/pirates/:id", (req, res) => PirateService.findOnePirate(req, res))
piratesRouter.post("/pirates/new", (req, res) => PirateService.createPirate(req, res))
piratesRouter.put("/pirates/:id/edit", (req, res) => PirateService.updatePirate(req, res))
piratesRouter.delete("/pirates/:id/delete", (req, res) => PirateService.deletePirate(req, res))

export default piratesRouter

