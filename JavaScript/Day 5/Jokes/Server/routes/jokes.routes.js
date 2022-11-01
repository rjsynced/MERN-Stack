import express from 'express'
import JokeService from '../services/jokes.service.js';

const jokesRouter = new express.Router()

jokesRouter.get("/", (req, res) => JokeService.findAllJokes(res))
jokesRouter.get("/:id", (req, res) => JokeService.findOneJoke(req, res))
jokesRouter.post("/", (req, res) => JokeService.createJoke(req, res))
jokesRouter.put("/edit/:_id", (req, res) => JokeService.updateJoke(req, res))
jokesRouter.delete("/delete/:_id", (req, res) => JokeService.deleteJoke(req, res))

export default jokesRouter

