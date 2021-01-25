import React from 'react'
import {NavLink} from 'react-router-dom'
import styled from 'styled-components'

const ProductDetails = props => {
  const {handleClick, product, order} = props

  /*
  *  RENDER RATINGS
  */
  const calcPercentage = (resale, orig) => {
    return Math.round(resale / orig * 100)
  }

  const parseStars = rating => {
    const numStars = Math.ceil(rating)
    const remainingStars = 5 - numStars
    let stars = []
    for (let i = 0; i < numStars; i++) {
      stars.push('starred')
    }
    for (let i = 0; i < remainingStars; i++) {
      stars.push('unstarred')
    }
    return stars
  }

  const starRating = parseStars(product.rating)

  return (
    <Container>
      <Title>{product.name}</Title>
      <ProductImage src={product.image} />
      <Price>
        <b>Price: ${product.resalePrice}</b>
        <OriginalPercentage>
          ($<Original>{product.origPrice}</Original>,{' '}
          {calcPercentage(product.resellPrice, product.origPrice)}% off)
        </OriginalPercentage>
        <StarContainer>
          <b>Rating: </b>
          <Stars>
            {starRating.map(star => {
              if (star === 'starred') {
                return <span className="fa fa-star checked" />
              } else if (star === 'unstarred') {
                return <span className="fa fa-star" />
              } else {
                return 'No Rating.'
              }
            })}
          </Stars>
        </StarContainer>
        <form id="stock">
          <label htmlFor="stock">
            <b>Stock:</b> {product.stock}
          </label>
        </form>
      </Price>
      <Description>{product.description}</Description>
      <ButtonContainer>
        <Button>
          <NavLink to={`/products/${product.id}`}>DETAILS</NavLink>
        </Button>
        <Button type="submit" onClick={() => handleClick(product, order.id)}>
          ADD TO CART
        </Button>
      </ButtonContainer>
    </Container>
  )
}

export default ProductDetails

/*
*  STYLED-COMPONENTS
*/
const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Barlow Semi Condensed', sans-serif;
  padding-bottom: 50px;
  width: 420px;
  padding-bottom: 30px;
  background-color: #ffffff;
  border: 1px solid #36008d;
  box-shadow: 5px 5px #36008d;
  padding: 15px 10px;
  padding-bottom: 60px;
  margin: 20px;
  position: relative;
`
const Title = styled.h1`
  font-family: 'Rubik', sans-serif;
  font-weight: 800;
  font-size: 1.15em;
  color: #36008d;
  border-top: 1px solid #36008d;
  border-bottom: 1px solid #36008d;
  padding: 2px;
  align-self: center;
`
const ProductImage = styled.img`
  width: 100%;
  height: 250px;
  overflow: hidden;
  border: 1px solid #36008d;
  margin-top: 10px;
  margin-bottom: 10px;
`
const Price = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
const Original = styled.span`
  text-decoration: line-through;
`
const OriginalPercentage = styled.div`
  padding-left: 5px;
  color: gray;
`
const Description = styled.div`
  text-align: left;
  padding: 10px;
  width: 100%;
  border-top: 1px solid #36008d;
  border-bottom: 1px solid #36008d;
  margin: 10px 0px;
`
const StarContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 15px;
`
const Stars = styled.div`
  margin-left: 7px;
`
const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0px;
  margin-top: 15px;
  margin-bottom: 15px;
  padding-bottom: 15px;
  height: 20px;
  width: 100%;
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
