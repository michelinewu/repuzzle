import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'
import {logout} from '../store'
import styled from 'styled-components'

const Navbar = ({handleClick, isLoggedIn}) => {
  const navbg = document.getElementById('navbg')

  window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY

    if (scrollPosition > 50) {
      navbg.classList.add('active')
    } else {
      navbg.classList.remove('active')
    }
  })

  return (
    <>
      <NavBackground id="navbg" />
      <Navigation>
        <LogoContainer>
          <NavLink to="/">
            <Logo />
          </NavLink>
        </LogoContainer>
        <nav>
          {isLoggedIn ? (
            <NavItems>
              {/* The navbar will show these NavLinks after you log in */}
              <NavLink to="/products">All Products</NavLink>
              <NavLink to="/home">Account Home</NavLink>
              <a href="#" onClick={handleClick}>
                Logout
              </a>
              <NavLink to="/cart">
                <ShoppingCartImg />
              </NavLink>
            </NavItems>
          ) : (
            <div>
              {/* The navbar will show these NavLinks before you log in */}
              <NavItems>
                <NavLink to="/products">All Products</NavLink>
                <NavLink to="/login-signup">Login / Sign Up</NavLink>
                <NavLink to="/cart">
                  <ShoppingCartImg />
                </NavLink>
              </NavItems>
            </div>
          )}
        </nav>
      </Navigation>
    </>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}

/* STYLED COMPONENTS */

const NavBackground = styled.div`
  position: fixed;
  height: 110px;
  width: 100%;
  transition: transform 0.3s;
  transform: translateY(-110px);

  background-color: purple;
  // background-color: #32D8D9;

  .active {
    transform: translateY(0px);
  }
`
const Navigation = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  width: 100%;
  position: fixed;
  z-index: 2;

  ul {
    height: 100%;
  }

  li {
    list-style-type: none;
    display: inline;
    padding: 20px;
    text-decoration: none;
  }

  a {
    color: #ffffff;
    text-decoration: none;
  }

  a:hover {
    color: #f4f155;
  }
`
const LogoContainer = styled.div`
  width: 42%;
  text-align: left;
  padding-left: 20px;
`
const Logo = styled.div`
  background: url('images/logos/logo-repuzzle-white.png') no-repeat;
  height: 70px;
  width: 300px;
  padding-left: 20px;
  background-size: 300px 70px;
  position: relative;

  :hover {
    background: url('images/logos/logo-repuzzle-yellow.png') no-repeat;
    background-size: 300px 70px;
  }
`
const NavItems = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  font-family: 'Rubik', sans-serif;
  font-weight: 800;
  font-size: 1.15em;
  letter-spacing: 1px;
  align-items: center;
  width: 500px;
`
const ShoppingCartImg = styled.div`
  background: url('images/shopping-cart/shopping-cart-white.png') no-repeat;
  width: 70px;
  height: 70px;
  padding-right: 20px;
  background-size: 70px 70px;

  :hover {
    background: url('images/shopping-cart/shopping-cart.png') no-repeat;
    background-size: 70px 70px;
  }
`
