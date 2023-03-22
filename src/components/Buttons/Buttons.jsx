import React from 'react';
import StyledButton from './buttons.styles';
import Whatsapp from "../../assets/images/Contact/whatsapp.svg"


const Buttons = (props) => {
const { text, type } = props;
  return (
    <StyledButton className='offset'>
      <img src={Whatsapp} alt="whatsapp" /> 
      Whatsapp Now
    </StyledButton>
  )
}

export default Buttons