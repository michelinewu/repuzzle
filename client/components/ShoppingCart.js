import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {
  fetchSingleOrder,
  setItemQuantity,
  removeFromCart
} from '../store/orders'

import styled from 'styled-components'
import LoadingPage from './LoadingPage'

export class ShoppingCart extends React.Component {
  constructor() {
    super()
    this.state = {
      loading: true
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }
  handleDelete(orderId, productId) {
    this.props.removeFromCart(orderId, productId)
    this.props.fetchSingleOrder()
  }
  handleSubmit(product, quantity) {
    this.props.setQuantity(product, quantity)
    this.props.fetchSingleOrder()
  }
  componentDidMount() {
    this.props.fetchSingleOrder()
    this.setState({loading: false})
  }
  render() {
    const products = this.props.order.products

    console.log('in component this.props: ', this.props)
    console.log('in component products = ', products)

    return (
      <>
        {this.loading ? (
          <LoadingPage />
        ) : (
          <Container>
            <Invaders>
              {[...Array(40)].map(i => (
                <InvaderWrapper>
                  <SpaceInvader />
                </InvaderWrapper>
              ))}
            </Invaders>
            <Content>
              <Title>Items</Title>
              <CartItemsContainer>
                {products.length < 1
                  ? 'No Products In Your Cart'
                  : products.map(product => (
                      <CartItem key={product.id}>
                        <ProductImage src={product.image} />
                        <ProductDetails>
                          <ProductTitle>{product.name}</ProductTitle>
                          Price: ${product.resellPrice}
                          {/* Quantity: {product.cartItem.quantity} */}
                          <form>
                            <label htmlFor="quantity">Change Quantity: </label>
                            <input
                              type="number"
                              id="quantity-form"
                              name="quantity"
                              min="0"
                            />
                            <Button
                              className="update-cart-button"
                              type="button"
                              onClick={() =>
                                this.handleSubmit(
                                  product,
                                  document.getElementById('quantity-form').value
                                )
                              }
                            >
                              Update Cart
                            </Button>
                            <Button
                              className="remove-button"
                              type="button"
                              onClick={() =>
                                this.handleDelete(
                                  this.props.order.id,
                                  product.id
                                )
                              }
                            >
                              Remove Item
                            </Button>
                          </form>
                        </ProductDetails>
                      </CartItem>
                    ))}
              </CartItemsContainer>
              <ButtonContainer>
                <Link to="/checkout">
                  <CheckoutButton type="submit">CHECKOUT</CheckoutButton>
                </Link>
              </ButtonContainer>
            </Content>
          </Container>
        )}
      </>
    )
  }
}

const mapState = state => ({
  order: state.order,
  quantity: state.quantity
})

const mapDispatch = dispatch => ({
  // addProductToCart: product => dispatch(addToCart(product)),
  fetchSingleOrder: () => dispatch(fetchSingleOrder()),
  setQuantity: (product, quantity) =>
    dispatch(setItemQuantity(product, quantity)),
  removeFromCart: (orderId, productId) =>
    dispatch(removeFromCart(orderId, productId))
})

export default connect(mapState, mapDispatch)(ShoppingCart)

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: calc(100vh - 100px);
  position: relative;
`
const Content = styled.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  width: 80%;
  min-height: 80%;
  padding: 10px;
  margin-top: 100px;
  background-color: #ffffff;
  border: 1px solid #36008d;
  box-shadow: 5px 5px #36008d;
  position: relative;
  z-index: 1;
`
const Title = styled.div`
  display: flex;
  justify-content: center;
  font-family: 'Roboto Slab', serif;
  width: 100%;
  font-weight: 800;
  letter-spacing: 0.3px;
  font-size: 4em;
  padding-bottom: 60px;
`
const CartItemsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`
const CartItem = styled.div`
  width: calc(50% - 20px);
  padding: 10px;
`
const ProductImage = styled.img`
  width: 300px;
  height: 200px;
  overflow: hidden;
  border: 1px solid #36008d;
`
const ProductDetails = styled.div``
const ProductTitle = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  font-family: 'Rubik', sans-serif;
  font-weight: 800;
  font-size: 1.15em;
  color: #36008d;
  border-top: 1px solid #36008d;
  border-bottom: 1px solid #36008d;
  padding: 2px;
`
const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: absolute;
  left: 0px;
  bottom: 0px;
  margin-bottom: 10px;
`
const Button = styled.button`
  padding: 10px;
  margin: 10px 10px;
  border: 1px solid #36008d;
  border-radius: 3px;
  color: #ffffff;
  background-color: #36008d;
  font-family: 'Barlow Semi Condensed', sans-serif;
  font-size: 1em;

  a {
    color: #ffffff;
    text-decoration: none;
    font-family: 'Barlow Semi Condensed', sans-serif;
    font-size: 1em;
  }

  :hover {
    background-color: #573492;
  }
`
const CheckoutButton = styled(Button)`
  letter-spacing: 1px;
  font-size: 3em;
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
