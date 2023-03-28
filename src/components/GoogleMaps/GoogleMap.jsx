import React from 'react'
import { StyledIframe,IframeDiv } from './googleMaps.styles'

const GoogleMap = () => {
  return (
    <IframeDiv>
        <StyledIframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.362800519332!2d72.82691211469769!3d19.091733587078867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9464b7d86e9%3A0xeea8cfabd6194dbc!2sApex%20Learning%20Academy!5e0!3m2!1sen!2suk!4v1679997754013!5m2!1sen!2suk" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></StyledIframe>
    </IframeDiv>
  )
}

export default GoogleMap