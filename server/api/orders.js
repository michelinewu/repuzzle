const router = require('express').Router()
const {Order, CartItem, Product} = require('../db/models')
const isAdmin = require('../../script/helpers/isAdmin')

module.exports = router

// GET /api/orders
router.get('/', async (req, res, next) => {
  console.log('api/orders')
  try {
    if (req.user === undefined) {
      res.sendStatus(404)
    } else if (isAdmin(req.user.id)) {
      const orders = await Order.findAll()
      res.json(orders)
    } else {
      res.sendStatus(404)
    }
  } catch (error) {
    next(error)
  }
})

// GET /api/orders/shopping_cart
router.get('/shopping_cart', async (req, res, next) => {
  try {
    if (req.user) {
      const order = await Order.findOrCreate({
        where: {
          userId: req.user.dataValues.id,
          submitted: false
        },
        include: Product
      })
      res.json(order)
    } else {
      const cookie = req.cookies['connect.sid']
      const order = await Order.findOrCreate({
        where: {
          visitorId: cookie,
          submitted: false
        },
        include: Product
      })
      res.json(order)
    }
  } catch (error) {
    next(error)
  }
})

//POST /api/orders/:orderId/products/:productId
router.post('/:orderId/products/:productId', async (req, res, next) => {
  console.log('req.body, ', req.body)
  try {
    const orderItem = await CartItem.findOrCreate({
      where: {
        orderId: req.params.orderId,
        productId: req.params.productId,
        price: req.body.resalePrice
      },
      defaults: {
        quantity: req.body.quantity
      }
    })
    res.json(orderItem)
  } catch (error) {
    next(error)
  }
})
//PUT /api/orders/:orderId/products/:productId
router.put('/:orderId/products/:productId', async (req, res, next) => {
  console.log('req.params.orderId from PUT--->', req.params.orderId)
  console.log('req.params.productId from PUT --->', req.params.productId)
  console.log('req.body.quantity from PUT--->', req.body.quantity)
  console.log('req.body from PUT --->', req.body)
  try {
    await CartItem.update(
      {
        quantity: req.body.quantity
      },
      {
        where: {
          orderId: req.params.orderId,
          productId: req.params.productId
        }
      }
    )
    res.sendStatus(204)
  } catch (error) {
    next(error)
  }
})

//DELETE /api/orders/:orderId/products/:productId
router.delete('/:orderId/products/:productId', async (req, res, next) => {
  try {
    await CartItem.destroy({
      where: {
        orderId: req.params.orderId,
        productId: req.params.productId
      }
    })
    res.sendStatus(204)
  } catch (error) {
    next(error)
  }
})
