import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import styled from 'styled-components'

/*
 * COMPONENT
 */
export const UserHome = props => {
  const {firstName} = props

  return (
    <Container>
      <Content>
        <Title>Welcome {firstName}</Title>
      </Content>
    </Container>
  )
}

/*
 * CONTAINER
 */
const mapState = state => {
  return {
    firstName: state.user.firstName
  }
}

export default connect(mapState)(UserHome)

/*
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}

/*
* STYLED COMPONENTS
*/

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
