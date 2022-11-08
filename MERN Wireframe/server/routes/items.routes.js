import express from 'express'
import ItemService from '../services/items.services.js'

const itemsRouter = new express.Router()

itemsRouter.get("/items", (req, res) => ItemService.findAllItems(res))
itemsRouter.get("/items/:id", (req, res) => ItemService.findOneItem(req, res))
itemsRouter.post("/items/new", (req, res) => ItemService.createItem(req, res))
itemsRouter.put("/items/:id/edit", (req, res) => ItemService.updateItem(req, res))
itemsRouter.put("/items/like/:id", (req, res) => ItemService.likeItem(req, res))
itemsRouter.delete("/items/:id/delete", (req, res) => ItemService.deleteItem(req, res))

export default itemsRouter

