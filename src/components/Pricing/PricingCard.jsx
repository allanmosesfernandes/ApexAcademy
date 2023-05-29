import React, { useState } from 'react'
import { PricingCardStyles, PricingButton } from './pricingStyles';
import { useNavigate } from 'react-router-dom';


const PricingCard = (props) => {

  const handleButtonClick = () => {
    navigate('/contact');
    window.scrollTo(0, 0);
  };
    const {
      title,
      price,
      active,
      onClick,
      marketPrice,
      monthly,
      showMonthlyPrice,
    } = props
    
    const handleClick = () =>{
        onClick(title);
    }
    const displayPrice = showMonthlyPrice ? monthly : price;

    return (
      <>
        <PricingCardStyles
          active={active}
          onClick={handleClick}
          marketPrice={marketPrice}
        >
          <h3>{title}</h3>
          <h2>₹{displayPrice}</h2>

          <p>What's included</p>
          <ul>
            <li>Self paced learning modules</li>
            <li>One-to-one sessions</li>
            <li>Practise tests</li>
            <li>Interactive quizzes</li>
          </ul>
          <PricingButton active={active} onClick={handleButtonClick}>
            Book Now
          </PricingButton>
        </PricingCardStyles>
      </>
    )
}

export default PricingCard