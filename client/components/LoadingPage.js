import React from 'react'
import styled from 'styled-components'

const LoadingPage = () => {
  return (
    <Container>
      <InvaderWrapper>
        <SpaceInvader />
      </InvaderWrapper>
    </Container>
  )
}

export default LoadingPage

/*
*  STYLED-COMPONENTS
*/
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`
const InvaderWrapper = styled.div`
  margin: 75px;
`
// Space Invader by Vlad Zinculescu: https://ecsspert.com/
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
