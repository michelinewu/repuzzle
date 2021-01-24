import React from 'react'
import styled from 'styled-components'

// background-color: ${props => (props.primary ? '#a0b39e' : '#DCDCDC')};

export const StyledButton = styled.button`
  padding: 10px;
  margin: 0px 5px;
  border: 1px solid #36008d;
  border-radius: 3px;
  color: #ffffff;
  background-color: #36008d;
  font-family: 'Barlow Semi Condensed', sans-serif;
  font-size: 1em;
  font-size: 0.75em;
  letter-spacing: 0.5;

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

const Button = ({primary, children, onClick, otherProps}) => {
  return (
    <StyledButton
      primary={primary}
      type="submit"
      onClick={onClick}
      {...otherProps}
    >
      {children}
    </StyledButton>
  )
}

export default Button
