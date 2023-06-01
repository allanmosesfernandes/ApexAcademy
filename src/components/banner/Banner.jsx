import React, { useState } from 'react'
import styled, { css } from 'styled-components'

const StyledBanner = styled.div`
  display: flex;
  justify-content: center;
  background-color: rgb(41, 82, 74);
  color: #fff;
  font-size: ${(props) => props.theme.fssmall};
  padding: 1rem;
  transition: transform 0.5s ease-in-out;
  ${(props) =>
    !props.show &&
    css`
      transform: translateY(-100%);
    `}
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
          <button onClick={hideBanner}>X</button>
        </StyledBanner>
      )}
    </>
  )
}

export default Banner
