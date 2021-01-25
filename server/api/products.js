const router = require('express').Router()
const {Product} = require('../db/models')
const isAdmin = require('../../script/helpers/isAdmin')
module.exports = router

// GET /api/products
router.get('/', async (req, res, next) => {
  try {
    const products = await Product.findAll()
    res.json(products)
  } catch (err) {
    next(err)
  }
})

// GET /api/products/:productId
router.get('/:productId', async (req, res, next) => {
  try {
    const product = await Product.findByPk(req.params.productId)
    res.json(product)
  } catch (error) {
    next(error)
  }
})

// POST /api/products
router.post('/', async (req, res, next) => {
  try {
    if (req.user === undefined) {
      res.sendStatus(404)
    } else if (isAdmin(req.user.id)) {
      const newProduct = await Product.create(req.body)
      res.json(newProduct)
    } else {
      res.sendStatus(404)
    }
  } catch (error) {
    next(error)
  }
})

// PUT /api/products/:productId
router.put('/:productId', async (req, res, next) => {
  try {
    if (req.user === undefined) {
      res.sendStatus(404)
    } else if (isAdmin(req.user.id)) {
      const product = await Product.findByPk(req.params.productId)
      const updatedProduct = await product.update(req.body)
      res.status(200).send(updatedProduct)
    } else {
      res.sendStatus(404)
    }
  } catch (error) {
    next(error)
  }
})

// DELETE /api/products/:productId
router.delete('/:productId', async (req, res, next) => {
  try {
    if (req.user === undefined) {
      res.sendStatus(404)
    } else if (isAdmin(req.user.id)) {
      const id = req.params.productId
      await Product.destroy({where: {id}})
      res.sendStatus(204)
    } else {
      res.sendStatus(404)
    }
  } catch (error) {
    next(error)
  }
})
