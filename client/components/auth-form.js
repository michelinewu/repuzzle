import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {auth} from '../store'

import styled from 'styled-components'
import Button from '../theme/Button'

/**
 * COMPONENT
 */
const AuthForm = props => {
  const {name, displayName, handleSubmit, error} = props

  return (
    <div>
      <form onSubmit={handleSubmit} name={name}>
        <div>
          <label htmlFor="email">
            <small>EMAIL</small>
          </label>
          <input name="email" type="text" />
        </div>
        <div>
          <label htmlFor="password">
            <small>PASSWORD</small>
          </label>
          <input name="password" type="password" />
        </div>
        <ButtonContainer>
          <Button type="submit">{displayName}</Button>
          <Button type="button">
            <a href="/auth/google">{displayName} WITH GOOGLE</a>
          </Button>
        </ButtonContainer>
        {error && error.response && <div> {error.response.data} </div>}
      </form>
    </div>
  )
}

/**
 * CONTAINER
 *   Note that we have two different sets of 'mapStateToProps' functions -
 *   one for Login, and one for Signup. However, they share the same 'mapDispatchToProps'
 *   function, and share the same Component. This is a good example of how we
 *   can stay DRY with interfaces that are very similar to each other!
 */
const mapLogin = state => {
  return {
    name: 'login',
    displayName: 'LOGIN',
    error: state.user.error
  }
}

const mapSignup = state => {
  return {
    name: 'signup',
    displayName: 'SIGN UP',
    error: state.user.error
  }
}

const mapDispatch = dispatch => {
  return {
    handleSubmit(evt) {
      evt.preventDefault()
      const formName = evt.target.name
      const email = evt.target.email.value
      const password = evt.target.password.value
      dispatch(auth(email, password, formName))
    }
  }
}

export const Login = connect(mapLogin, mapDispatch)(AuthForm)
export const Signup = connect(mapSignup, mapDispatch)(AuthForm)

/**
 * PROP TYPES
 */
AuthForm.propTypes = {
  name: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.object
}

/*
*  STYLED-COMPONENTS
*/
const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 20px;
`
