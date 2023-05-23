import React from 'react'
import Container from '../styles/container.stylesheet'
import { useState, useRef } from 'react'
import { FormDivWrapper, EnquiresFormStyled, PhoneInputWrapper } from './enquiryForm.styles'
import { useNavigate } from 'react-router-dom';
import GoogleMap from '../GoogleMaps/GoogleMap';

const EnquiryForm = () => {
    const navigate = useNavigate();
    const formRef = useRef(null);

    const defaultFormFields = {
        firstName: "",
        lastName: "",
        email: "",
        contactNumber: "",
        courseSelection: "",
    }

    const [ formFields, setFormFields ] = useState(defaultFormFields);
    const { firstName, lastName, email, contactNumber, courseSelection } = formFields;
    const courses = ['FYJC', 'SYJC', 'FYBCOM', 'SYBCOM', 'TYBCOM', 'BMS']; // Replace with your course options

    const handleFormValueChange = (event) => {
        const { name, value } = event.target;
        setFormFields({...formFields, [name]:value})
    }

//     const handleSubmit = (event) => {
//       event.preventDefault();
//       console.log(formFields);
//     
//       const encodedFormData = Object.keys(formFields)
//         .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(formFields[key]))
//         .join('&');
//       fetch('/', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
//         body: encodedFormData,
//       })
//       .then(() => alert("Success!"))
//       .catch(error => alert(error));
// 
//     };
    
  return (
    <Container>
      <FormDivWrapper>
      <h2>Enquiries</h2>
      <p>Fill out the form below and we'll get in touch shortly</p>
      <EnquiresFormStyled
        name='contact'
        method='POST'
        data-netlify='true'>
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
        <input type='email' name='email' placeholder='Email address'/>

            {/* <select name='courseSelection' defaultValue='' onChange={handleFormValueChange}>
              <option value='' disabled>
                Select your course
              </option>
              <option value='FYJC'>FYJC</option>
              <option value='SYJC'>SYJC</option>
              <option value='FYBCOM'>FYBCOM</option>
              <option value='SYBCOM'>SYBCOM</option>
              <option value='TYBCOM'>TYBCOM</option>
              <option value='BMS'>BMS</option>
            </select>

            <PhoneInputWrapper>
              <input
                type='number'
                placeholder='Mobile Number'
                name='contactNumber'
                required
                pattern='^[789]\d{9}$'
                title='Enter a valid mobile number'
                onChange={handleFormValueChange}
              />
            </PhoneInputWrapper> */}
            <button type='submit'>Submit</button>
          </EnquiresFormStyled>

        {/* <div id='form'>
          <h2>Enquiries</h2>
          <p>Fill out the form below and we'll get in touch shortly</p>

          <EnquiresFormStyled
            name='enquries'
            method='POST'
            data-netlify='true'
            action='/about'
            id='enquries'
          >
            <input type='hidden' name='enquries' value='enquries' />
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
              <option value='FYJC'>FYJC</option>
              <option value='SYJC'>SYJC</option>
              <option value='FYBCOM'>FYBCOM</option>
              <option value='SYBCOM'>SYBCOM</option>
              <option value='TYBCOM'>TYBCOM</option>
              <option value='BMS'>BMS</option>
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
            <button type='submit'>Submit</button>
          </EnquiresFormStyled>
        </div> */}
        <GoogleMap />
      </FormDivWrapper>
    </Container>
  )
}

export default EnquiryForm