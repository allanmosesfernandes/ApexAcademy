import React from 'react';
import { useState } from 'react';
import  Container  from '../styles/container.stylesheet'
import Collab from "../../assets/images/collaborative.svg";
import { ValuesContainer, ValueCard, PurpleToggle, Approach__container } from './values.styles';
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
            <Approach__container>
                <div className="approach_div_left">
                    <div className="approach__img">
                        <img src={Reason1} alt="Reason one"/>
                    </div>
                </div>
                <div className="approach_div_right">
                   <span className="number-small">01 - Strategy</span>
                   <h4>think big thanks to an in-depth analysis.</h4>
                   <p className="body-copy">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum nesciunt assumenda rerum nulla ullam, sit quia beatae velit molestiae saepe.
                   </p>
                </div>
            </Approach__container>
            <Approach__container>
                <div className="approach_div_right">
                   <span className="number-small">02 - Strategy</span>
                   <h4>think big thanks to an in-depth analysis.</h4>
                   <p className="body-copy">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum nesciunt assumenda rerum nulla ullam, sit quia beatae velit molestiae saepe.
                   </p>
                </div>
                <div className="approach_div_left">
                    <div className="approach__img">
                        <img src={Reason2} alt="Reason one"/>
                    </div>
                </div>

            </Approach__container>
            <Approach__container>
                <div className="approach_div_left">
                    <div className="approach__img">
                        <img src={Reason3} alt="Reason one"/>
                    </div>
                </div>
                <div className="approach_div_right">
                   <span className="number-small">03 - Strategy</span>
                   <h4>think big thanks to an in-depth analysis.</h4>
                   <p className="body-copy">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum nesciunt assumenda rerum nulla ullam, sit quia beatae velit molestiae saepe.
                   </p>
                </div>
            </Approach__container>
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