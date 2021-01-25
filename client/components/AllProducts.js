import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import {fetchProducts} from '../store/products'
import {addToCart} from '../store/orders'
import {ProductDetails, LoadingPage} from './index'
import styled from 'styled-components'

const AllProducts = props => {
  const {products} = props

  console.log('allproducts props ', props)

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    props.getProducts()
    setLoading(false)
  }, [])

  const handleClick = (productObj, orderId) => {
    props.addProductToCart(productObj, orderId)
  }

  return (
    <Container>
      {loading ? (
        <LoadingPage />
      ) : (
        <Content>
          <Title>All Products</Title>
          {Array.isArray(products) ? (
            <Products>
              {products.map(product => (
                <ProductDetails
                  key={product.id}
                  product={product}
                  order={props.order}
                  handleClick={handleClick}
                />
              ))}
            </Products>
          ) : (
            <NoProducts>No Products</NoProducts>
          )}
        </Content>
      )}
    </Container>
  )
}

const mapState = state => ({
  products: state.products,
  order: state.order
})

const mapDispatch = dispatch => ({
  getProducts: () => dispatch(fetchProducts()),
  addProductToCart: (productObj, orderId) =>
    dispatch(addToCart(productObj, orderId))
})

export default connect(mapState, mapDispatch)(AllProducts)

/*
*  STYLED-COMPONENTS
*/
const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  padding-top: 60px;
  padding-bottom: 60px;
  text-align: center;
  width: 100%;
`
const Content = styled.div`
  top: 0px;
  left: 0px;
`
const Title = styled.div`
  font-family: 'Roboto Slab', serif;
  color: #36008d;
  width: 100%;
  font-weight: 800;
  letter-spacing: 0.3px;
  font-size: 4em;
  padding-top: 200px;
  padding-bottom: 60px;
`
const Products = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
`
const NoProducts = styled(Title)`
  color: #ffffff;
`
