import React from 'react'
import {Login, Signup} from './index'

import styled from 'styled-components'

const LoginSignup = props => {
  return (
    <Container>
      <Invaders>
        {[...Array(40)].map(i => (
          <InvaderWrapper key={i}>
            <SpaceInvader />
          </InvaderWrapper>
        ))}
      </Invaders>
      <FormWrapper>
        <Title>Already have an account? Log-in:</Title>
        <Login />
      </FormWrapper>

      <FormWrapper>
        <Title>New to Repuzzle? Sign up for an account:</Title>
        <Signup />
      </FormWrapper>
    </Container>
  )
}

export default LoginSignup

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`
const Title = styled.div`
  text-align: center;
  font-weight: 800;
  font-size: 1.15em;
  margin-bottom: 20px;
`
const FormWrapper = styled.div`
  max-width: 40%;
  min-width: 400px;
  background-color: #ffffff;
  border: 1px solid #36008d;
  box-shadow: 5px 5px #36008d;
  margin: 20px;
  padding: 20px;
  z-index: 1;
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
