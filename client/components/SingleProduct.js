import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import {ProductDetails, LoadingPage} from './index'
import {fetchSingleProduct} from '../store/singleproduct'
import {addToCart} from '../store/orders'
import styled from 'styled-components'

const SingleProduct = props => {
  const {product} = props

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    props.fetchSingleProduct(props.match.params.productId)
    setLoading(false)
  }, [])

  const handleClick = (productObj, orderId) => {
    props.addProductToCart(productObj, orderId)
  }

  if (loading) {
    return <LoadingPage />
  } else {
    return (
      <Container>
        <Invaders>
          {[...Array(40)].map(i => (
            <InvaderWrapper key={i}>
              <SpaceInvader />
            </InvaderWrapper>
          ))}
        </Invaders>
        <ProductDetails
          product={product}
          order={props.order}
          handleClick={handleClick}
        />
      </Container>
    )
  }
}

const mapState = state => {
  return {
    product: state.product,
    order: state.order
  }
}
const mapDispatch = dispatch => {
  return {
    fetchSingleProduct: productId => dispatch(fetchSingleProduct(productId)),
    addProductToCart: (product, orderId) =>
      dispatch(addToCart(product, orderId))
  }
}
export default connect(mapState, mapDispatch)(SingleProduct)

/*
*  STYLED-COMPONENTS
*/
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100vh - 100px);
  position: relative;
`
const Invaders = styled.div`
  position: absolute;
  top: 100px;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: calc(100vh - 100px);
  overflow: hidden;
`
const InvaderWrapper = styled.div`
  margin: 75px;
`
// Space Invander by Vlad Zinculescu: https://ecsspert.com/
const SpaceInvader = styled.div`
  box-shadow: 0 0 0 1em #f4f155, 0 1em 0 1em #f4f155,
    -2.5em 1.5em 0 0.5em #f4f155, 2.5em 1.5em 0 0.5em #f4f155,
    -3em -3em 0 0 #f4f155, 3em -3em 0 0 #f4f155, -2em -2em 0 0 #f4f155,
    2em -2em 0 0 #f4f155, -3em -1em 0 0 #f4f155, -2em -1em 0 0 #f4f155,
    2em -1em 0 0 #f4f155, 3em -1em 0 0 #f4f155, -4em 0 0 0 #f4f155,
    -3em 0 0 0 #f4f155, 3em 0 0 0 #f4f155, 4em 0 0 0 #f4f155,
    -5em 1em 0 0 #f4f155, -4em 1em 0 0 #f4f155, 4em 1em 0 0 #f4f155,
    5em 1em 0 0 #f4f155, -5em 2em 0 0 #f4f155, 5em 2em 0 0 #f4f155,
    -5em 3em 0 0 #f4f155, -3em 3em 0 0 #f4f155, 3em 3em 0 0 #f4f155,
    5em 3em 0 0 #f4f155, -2em 4em 0 0 #f4f155, -1em 4em 0 0 #f4f155,
    1em 4em 0 0 #f4f155, 2em 4em 0 0 #f4f155;
  background: #f4f155;
  width: 1em;
  height: 1em;
  overflow: hidden;
  margin: 50px 0 70px 65px;
`
