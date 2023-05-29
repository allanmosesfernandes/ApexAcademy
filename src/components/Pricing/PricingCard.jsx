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
      subjects
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

          <p>Subjects included</p>
            <ul>
                {
                    subjects.map((sub,index) => {return <li key={index}> {sub} </li>})
                }
            </ul>

          <PricingButton active={active} onClick={handleButtonClick}>
            Book Now
          </PricingButton>
        </PricingCardStyles>
      </>
    )
}

export default PricingCard