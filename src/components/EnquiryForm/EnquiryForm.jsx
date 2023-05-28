import React from 'react'
import Container from '../styles/container.stylesheet'
import { useState, useRef } from 'react'
import { FormDivWrapper, EnquiresFormStyled, PhoneInputWrapper } from './enquiryForm.styles'
import { useNavigate } from 'react-router-dom';
import GoogleMap from '../GoogleMaps/GoogleMap';

const EnquiryForm = () => {
    const navigate = useNavigate();

    // const defaultFormFields = {
    //     firstName: "",
    //     lastName: "",
    //     email: "",
    //     contactNumber: "",
    //     courseSelection: "",
    // }

    // const [ formFields, setFormFields ] = useState(defaultFormFields);
    // const { firstName, lastName, email, contactNumber, courseSelection } = formFields;
    // const courses = ['FYJC', 'SYJC', 'FYBCOM', 'SYBCOM', 'TYBCOM', 'BMS']; 

    // const handleFormValueChange = (event) => {
    //     const { name, value } = event.target;
    //     setFormFields({...formFields, [name]:value})
    // }

    // const handleSubmit = (event) => {
    //   event.preventDefault();
    //   console.log(formFields);
    
    //   const encodedFormData = Object.keys(formFields)
    //     .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(formFields[key]))
    //     .join('&');
    
    //   fetch('/', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    //     body: encodedFormData
    //   })
    //     .then(() => alert("Success!"))
    //     .catch(error => alert(error));
    // };
    
    
    
  return (
    <Container>
      <FormDivWrapper>
        <h2>Enquiries</h2>
        <p>Fill out the form below and we'll get in touch shortly</p>
        <form name='contact' method='post'>
          <input type='hidden' name='form-name' value='contact' />
          <p>
            <label>
              Your Name: <input type='text' name='name' />
            </label>
          </p>
          <p>
            <label>
              Your Email: <input type='email' name='email' />
            </label>
          </p>
          <p>
            <label>
              Message: <textarea name='message'></textarea>
            </label>
          </p>
          <p>
            <button type='submit'>Send</button>
          </p>
        </form>
        <GoogleMap />
      </FormDivWrapper>
    </Container>
  )
}

export default EnquiryForm