import express from 'express'
import AuthorService from '../services/authors.service.js'

const authorsRouter = new express.Router()

authorsRouter.get("/authors", (req, res) => AuthorService.findAllAuthors(res))
authorsRouter.get("/authors/:id", (req, res) => AuthorService.findOneAuthor(req, res))
authorsRouter.post("/authors/new", (req, res) => AuthorService.createAuthor(req, res))
authorsRouter.put("/authors/:id/edit", (req, res) => AuthorService.updateAuthor(req, res))
authorsRouter.delete("/authors/:id/delete", (req, res) => AuthorService.deleteAuthor(req, res))

export default authorsRouter

