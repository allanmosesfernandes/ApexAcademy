import React from 'react'
import { PricingCardStyles } from './pricingStyles';
const PricingCard = (props) => {
    const {title, price} = props;

    return (
        <PricingCardStyles>
            <h3>{title}</h3>
            <h2>₹{price}</h2>
            <p>What's included</p>
            <ul>
                <li>Self paced learning modules</li>
                <li>One-to-one sessions</li>
                <li>Practise tests</li>
                <li>Interactive quizzes</li>
            </ul>
            <button>Book Now!</button>
        </PricingCardStyles>
    )
}

export default PricingCard