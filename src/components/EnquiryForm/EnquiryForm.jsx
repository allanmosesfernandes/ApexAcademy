import React from 'react'
import Container from '../styles/container.stylesheet'
import { useState, useRef } from 'react'
import { FormDivWrapper, EnquiresFormStyled, PhoneInputWrapper } from './enquiryForm.styles'
import { useNavigate } from 'react-router-dom';
import GoogleMap from '../GoogleMaps/GoogleMap';
import Contact from '../Contact/Contact';
const EnquiryForm = () => {
  const navigate = useNavigate();
    
  return (
    <Container>
      <FormDivWrapper>
        <div>
          <h2>Enquiries</h2>
          <p>Fill out the form below and we'll get in touch shortly</p>
          <EnquiresFormStyled name='contact' method='post'>
            <input type='hidden' name='form-name' value='contact' />
            <input
              type='text'
              name='firstName'
              placeholder='First Name'
              pattern='^[a-zA-Z\s-]+$'
              title='Name cannot contain special characters'
              required
            />
            <input
              type='text'
              name='lastName'
              placeholder='Last Name'
              pattern='^[a-zA-Z\s-]+$'
              title='Name cannot contain special characters'
              required
            />
            <input type='email' name='email' placeholder='Email address' />
            <select name='courseSelection' defaultValue=''>
              <option value='' disabled>
                Select your course
              </option>
              <option value='School'>School Section</option>
              <option value='SSC'>SSC</option>
              <option value='FYJC'>FYJC</option>
              <option value='SYJC'>SYJC</option>
              <option value='BCOM'>BCOM</option>
              <option value='BAF'>BAF</option>
              <option value='BMS'>BMS</option>
              <option value='BBI'>BBI</option>
            </select>
            <PhoneInputWrapper>
              <input
                type='number'
                placeholder='Mobile Number'
                name='contactNumber'
                required
                pattern='^[789]\d{9}$'
                title='Enter a valid mobile number'
              />
            </PhoneInputWrapper>
            <button type='submit'>Send</button>
          </EnquiresFormStyled>
        </div>
        <GoogleMap />
      </FormDivWrapper>
      <Contact />
    </Container>
  )
}

export default EnquiryForm