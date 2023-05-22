import React from 'react'
import { StyledHeader, LinksRIght } from './header.styles'
import  Container  from '../styles/container.stylesheet'
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ArrowButton } from '../Buttons/buttons.styles';

const Header = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  
  const [navbarChange, setNavbarChange] = useState(false);

  const changeColor = () => {
    if(window.scrollY >= 90) {
      setNavbarChange(true);
    }
    else {
      setNavbarChange(false)
    }
  }
  
  useEffect(() => {
    window.scrollTo(0, 0);
    window.addEventListener("scroll", changeColor);
    return () => {
      window.removeEventListener("scroll", changeColor);
    };
  }, []);

window.addEventListener("scroll", changeColor);
  return (
    <>
    <Container>
    <StyledHeader>
        <nav className={navbarChange ? "header-bg" : ""}>
        <h2 onClick={scrollToTop}>
            <Link to="/"><span>Apex Academy</span> </Link>
        </h2>
        <LinksRIght>
            <Link to="about">About</Link>
            {/* <Link to="pricing">Pricing</Link> */}
            <Link to="contact"><ArrowButton>Enroll Now</ArrowButton></Link> 
            
        </LinksRIght>
        </nav>
    </StyledHeader>
    </Container>
    <Outlet />
    </>


  )
}

export default Header