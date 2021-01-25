import axios from 'axios'

/**
 * ACTION TYPES
 */
const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
const SET_QUANTITY = 'SET_QUANTITY'
const GET_TOTAL = 'GET_TOTAL'
const GET_SINGLE_ORDER = 'GET_SINGLE_ORDER'
const ADD_TO_CART = 'ADD_TO_CART'

/**
 * ACTION CREATORS
 */
export const removeFromCartAction = (orderId, productId) => ({
  type: REMOVE_FROM_CART,
  orderId,
  productId
})

export const setQuantityAction = products => ({
  type: SET_QUANTITY,
  products
})

export const getTotalAction = product => ({
  type: GET_TOTAL,
  product
})

export const getSingleOrder = order => ({
  type: GET_SINGLE_ORDER,
  order
})
export const addToCartAction = product => ({
  type: ADD_TO_CART,
  product
})

/**
 * THUNK CREATORS
 */
export const fetchSingleOrder = () => {
  return async dispatch => {
    try {
      const {data: order} = await axios.get('/api/orders/shopping_cart')
      console.log('in order thunk order,', order)
      console.log('in order thunk order.id,', order[0].id)
      dispatch(getSingleOrder(order[0]))
    } catch (error) {
      console.error('ERROR fetching single order')
    }
  }
}
export const addToCart = product => {
  return async dispatch => {
    try {
      const {data: order} = await axios.get('/api/orders/shopping_cart')
      const orderId = order[0].id
      const orderProduct = await axios.post(
        `/api/orders/${orderId}/products/${product.id}`,
        product
      )
      console.log('orderProduct.data ', orderProduct.data[0])
      dispatch(addToCartAction(orderProduct.data[0]))
    } catch (error) {
      console.error(error)
      console.error('ERROR adding product to cart in thunk!')
    }
  }
}
export const setItemQuantity = (product, quantity) => {
  return async dispatch => {
    try {
      const {data: order} = await axios.get('/api/orders/shopping_cart')
      const orderId = order[0].id
      const updatedOrder = await axios.put(
        `/api/orders/${orderId}/products/${product.id}`,
        {
          quantity: quantity
        }
      )
      console.log(updatedOrder)
      dispatch(setQuantityAction(product, quantity))
    } catch (error) {
      console.error('Error Updating Quantity in Thunk!')
    }
  }
}

export const removeFromCart = (orderId, productId) => {
  console.log('before return in THUNK')
  return async dispatch => {
    console.log('before try in THUNK')
    try {
      await axios.delete(`/api/orders/${orderId}/products/${productId}`)
      dispatch(removeFromCartAction(orderId, productId))
    } catch (error) {
      console.error('ERROR removing from cart in THUNK')
    }
  }
}

/**
 * INITIAL STATE
 */
const initialState = {
  products: []
}

/**
 * REDUCER
 */
export default function ordersReducer(state = initialState, action) {
  switch (action.type) {
    case GET_SINGLE_ORDER:
      return action.order

    case ADD_TO_CART:
      return {...state, products: [...state.products, action.product]}
    case SET_QUANTITY:
      console.log('action.quantity--->', action.quantity)
      return {...state, quantity: action.quantity}
    case REMOVE_FROM_CART:
      return {
        ...state,
        products: [
          ...state.products.filter(product => product.id !== action.productId)
        ]
      }
    default:
      return state
  }
}
