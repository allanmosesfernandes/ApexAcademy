import React from 'react'
import StyledButton from './buttons.styles'
const Buttons = (props) => {
const { text, type } = props;
  return (
    <StyledButton className='offset'>
      Whatsapp Now
    </StyledButton>
  )
}

export default Buttons