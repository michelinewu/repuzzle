import axios from 'axios'

/**
 * ACTION TYPES
 */
const SET_SINGLE_PRODUCT = 'SET_SINGLE_PRODUCT'

/**
 * ACTION CREATORS
 */
export const setSingleProduct = product => {
  return {
    type: SET_SINGLE_PRODUCT,
    product
  }
}

/**
 * THUNK CREATORS
 */
export const fetchSingleProduct = productId => {
  console.log('fetchSingleProduct thunk')
  return async dispatch => {
    console.log('try dispatching')
    try {
      console.log('in try')
      const {data} = await axios.get(`/api/products/${productId}`)
      console.log('fetchSingleProduct Thunk ', data)
      dispatch(setSingleProduct(data))
    } catch (err) {
      console.log(err)
    }
  }
}

/**
 * INITIAL STATE
 */
const initialState = {}

/**
 * ACTION CREATORS
 */
export default function singleProductReducer(state = initialState, action) {
  switch (action.type) {
    case SET_SINGLE_PRODUCT:
      return action.product
    default:
      return state
  }
}
