import React from 'react';
import { useState } from 'react';
import { Container } from '../styles/container.stylesheet'
import Collab from "../../assets/images/collaborative.svg";
import { ValuesContainer, ValueCard, PurpleToggle } from './values.styles';
import PurplePlus from "../../assets/images/principles/purpleplus.svg";
import Evolve from "../../assets/images/principles/evolving.svg";
import Getter from "../../assets/images/principles/go-getter.svg";
import Marquee from '../Marquee/Marquee'

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
        <div>Values</div>
        <ValuesContainer>
        <ValueCard >
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
                <img src={ Evolve } alt="collaboration" />
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
        </ValueCard>
        </ValuesContainer>
    </Container>

    </>

  )
}

export default Values