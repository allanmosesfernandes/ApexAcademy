import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { AiFillCloseCircle } from 'react-icons/ai'
const StyledBanner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(41, 82, 74);
  color: #fff;
  font-size: ${(props) => props.theme.fssmall};
  padding: 1rem;
  transition: transform 0.5s ease-in-out;
  p {
    font-weight: 500;
  }
  ${(props) =>
    !props.show &&
    css`
      transform: translateY(-100%);
    `}

  .close {
    cursor: pointer;
    margin-left: 10px;
  }

  @media only screen and (max-width: 600px) {
    //code goes here
    font-size: ${(props) => props.theme.fsxsmall};
    text-align: center;
    padding: 0.5rem;
  }
`

const Banner = (props) => {
  const [showBanner, setShowBanner] = useState(true)

  const hideBanner = () => {
    setShowBanner(false)
  }

  const { title } = props

  return (
    <>
      {showBanner && (
        <StyledBanner show={showBanner}>
          <p>{title}</p>
          <AiFillCloseCircle onClick={hideBanner} className="close" />
        </StyledBanner>
      )}
    </>
  )
}

export default Banner
