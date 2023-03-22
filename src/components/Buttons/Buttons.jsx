import React from 'react';
import StyledButton from './buttons.styles';
import Whatsapp from "../../assets/images/Contact/whatsapp.svg"
import { Link } from 'react-router-dom';

const Buttons = (props) => {
const { text, type } = props;
  return (
  <Link to="https://wa.me/919619303386">
    <StyledButton className='offset'>
      <img src={Whatsapp} alt="whatsapp" /> 
      Whatsapp Now
    </StyledButton>
  </Link>
  )
}

export default Buttons