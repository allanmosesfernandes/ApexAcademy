import React from 'react'
import { StyledHeader, LinksRIght } from './header.styles'
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { ArrowButton } from '../Buttons/buttons.styles'
import Banner from '../banner/Banner'
import { GiGraduateCap } from 'react-icons/gi'
import Grad from '../../assets/images/Grad.png'

const Header = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  const [navbarChange, setNavbarChange] = useState(false)

  const changeColor = () => {
    if (window.scrollY >= 90) {
      setNavbarChange(true)
    } else {
      setNavbarChange(false)
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0)
    window.addEventListener('scroll', changeColor)
    return () => {
      window.removeEventListener('scroll', changeColor)
    }
  }, [])

  window.addEventListener('scroll', changeColor)
  return (
    <>
      <Banner
        title={`Admissions for the academic year 2023 - 2024 are now open🎉`}
      />
      <StyledHeader>
        <nav className={navbarChange ? 'header-bg' : ''}>
          <h2 onClick={scrollToTop}>
            <Link to='/'>
              <span>Apex Learning Academy</span>
            </Link>
          </h2>
          <LinksRIght>
            <Link to='/'>Home</Link>
            <Link to='about'>About</Link>
            {/* <Link to="pricing">Pricing</Link> */}
            <Link to='contact'>
              <ArrowButton>Enroll Now</ArrowButton>
            </Link>
          </LinksRIght>
        </nav>
      </StyledHeader>
      <Outlet />
    </>
  )
}

export default Header
