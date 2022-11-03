import express from 'express'
import ProductService from '../services/products.service.js'

const productsRouter = new express.Router()

productsRouter.get("/products", (req, res) => ProductService.findAllProducts(res))
productsRouter.get("/products/:id", (req, res) => ProductService.findOneProduct(req, res))
productsRouter.post("/products", (req, res) => ProductService.createProduct(req, res))
productsRouter.put("/products/:id/edit", (req, res) => ProductService.updateProduct(req, res))
productsRouter.delete("/products/:id/delete", (req, res) => ProductService.deleteProduct(req, res))

export default productsRouter

