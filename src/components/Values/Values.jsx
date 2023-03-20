import React from 'react';
import { useState } from 'react';
import  Container  from '../styles/container.stylesheet'
import Collab from "../../assets/images/collaborative.svg";
import { ValuesContainer, ValueCard, PurpleToggle } from './values.styles';
import PurplePlus from "../../assets/images/principles/purpleplus.svg";
import Evolve from "../../assets/images/principles/evolving.svg";
import Getter from "../../assets/images/principles/go-getter.svg";
import Marquee from '../Marquee/Marquee'
import Reason1 from "../../assets/images/WhyApex/reason1.svg"
import Reason2 from "../../assets/images/WhyApex/reason2.svg"
import Reason3 from "../../assets/images/WhyApex/reason3.svg"
const Values = () => {

    //== Toggle State ==//
    const ToggleIcon = (e) => {
        const plusIcon = e.target.classList.toggle("active");
        const ValueCard = e.target.offsetParent.classList.toggle("active");
    };

  return (
    <>
    <Marquee />
        <Container>
        <ValuesContainer>
            <h2>This is how we approach learning together</h2>
            <div className="approach__container">
                <div className="approach_div_left">
                    <div className="approach__img">
                        <img src={Reason1} alt="Reason one"/>
                    </div>
                </div>
            </div>
        {/* <ValueCard >
            <div className="values-inital">
                <img src={ Collab } alt="collaboration" />
                <h2>COLLABORATIVE</h2>
                <p>Nobody is smart as everybody</p>
            </div>
            <span>
                We believe in the power of collective intelligence and teamwork. Nobody is as smart as everybody together.
            </span>
            <PurpleToggle src={PurplePlus} alt="Icon to toggle state on mobile" onClick={ToggleIcon} />
        </ValueCard>
        <ValueCard >
            <div className="values-inital">
                <img src={ Reason1 } alt="collaboration" />
                <h2>COLLABORATIVE</h2>
                <p>Nobody is smart as everybody</p>
            </div>
            <span>
                We believe in the power of collective intelligence and teamwork. Nobody is as smart as everybody together.
            </span>
            <PurpleToggle src={PurplePlus} alt="Icon to toggle state on mobile" onClick={ToggleIcon} />
        </ValueCard>
        <ValueCard >
            <div className="values-inital">
                <img src={ Getter } alt="collaboration" />
                <h2>COLLABORATIVE</h2>
                <p>Nobody is smart as everybody</p>
            </div>
            <span>
                We believe in the power of collective intelligence and teamwork. Nobody is as smart as everybody together.
            </span>
            <PurpleToggle src={PurplePlus} alt="Icon to toggle state on mobile" onClick={ToggleIcon} />
        </ValueCard> */}


        </ValuesContainer>
    </Container>

    </>

  )
}

export default Values