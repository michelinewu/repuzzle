import React from 'react'
import styled from 'styled-components'

// import {AllProducts} from './index'
import {NavLink} from 'react-router-dom'

const HomePage = props => {
  const populateText = () => {
    const text = []
    for (let i = 0; i < 30; i++) {
      text.push('Reduce Reuse Recycle ')
    }
    return text.join(' ')
  }
  return (
    <>
      <FullScreenBackground>
        <Hero>
          <MainTextWrapper>
            <div>
              Tired of your old puzzles <br />
              and board games?
            </div>
            <br />
            <div>Repuzzle them!</div>
            <HeroButton>
              <NavLink to="/products">VIEW PRODUCTS</NavLink>
            </HeroButton>
          </MainTextWrapper>
        </Hero>
      </FullScreenBackground>
      <ReduceReuseRecycle>{populateText()}</ReduceReuseRecycle>
      {/* <AllProducts /> */}
    </>
  )
}

export default HomePage

const FullScreenBackground = styled.div`
  background: url('/images/background-puzzle-cutout.png') no-repeat fixed;
  background-size: 100%;
  background-clip: border-box;
  background-color: #36008d;
  height: 100vh;
  width: 100%;
  position: relative;
  z-index: 1;
`
const Hero = styled.div`
  font-size: 2.5em;
  display: flex;
  margin: 0px;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  font-family: 'Roboto Slab', serif;
`
const HeroButton = styled.button`
  font-family: 'Barlow Semi Condensed';
  font-size: 1em;
  background-color: #f4f155;
  color: #36008d;
  font-weight: 800;
  padding: 20px;
  margin-top: 80px;
  border: 1px solid #36008d;
  border-radius: 3px;
  align-self: flex-start;

  a {
    text-decoration: none;
  }

  :hover {
    background-color: #f1ec94;
  }

  :active {
    color: #36008d;
  }

  :selected {
    color: #36008d;
  }
`
const MainTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: 700px;
  position: absolute;
  top: 50%;
  left: 20%;
  padding: 35px;
  transform: translate(-30%, -50%);
`
const ReduceReuseRecycle = styled.div`
  display: flex;
  overflow-y: hidden;
  text-overflow: clip;
  letter-spacing: 1px;
  font-family: 'Distortion Dos Digital', sans-serif;
  word-break: break-all;
  width: 100%;
  font-size: 28px;
  color: #00c9b8;
  padding: 5px;
  height: 102px;
  background-color: #f4f155;
  box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.2),
    2px 6px 20px 0 rgba(0, 0, 0, 0.19);
`
