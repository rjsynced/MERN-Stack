import express from 'express'
import ProductService from '../services/products.service.js'

const productsRouter = new express.Router()

productsRouter.get("/", (req, res) => ProductService.findAllProducts(res))
productsRouter.get("/:_id", (req, res) => ProductService.findOneProduct(req, res))
productsRouter.post("/", (req, res) => ProductService.createProduct(req, res))
productsRouter.put("/edit/:_id", (req, res) => ProductService.updateProduct(req, res))
productsRouter.delete("/delete/:_id", (req, res) => ProductService.deleteProduct(req, res))

export default productsRouter

