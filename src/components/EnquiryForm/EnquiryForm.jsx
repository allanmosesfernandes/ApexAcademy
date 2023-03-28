import React from 'react'
import Container from '../styles/container.stylesheet'
import { useState } from 'react'
import { FormDivWrapper, EnquiresFormStyled, PhoneInputWrapper } from './enquiryForm.styles'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import GoogleMap from '../GoogleMaps/GoogleMap';

const EnquiryForm = () => {
    const navigate = useNavigate();

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

const handleSubmit = (event) => {
  event.preventDefault();

  const myForm = event.target;
  const formData = new FormData(myForm);

  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString(),
  })
    .then(() => navigate("/"))
    .catch((error) => alert(error));
};



  return (
    <Container>
        <FormDivWrapper>
            <div>
            <h2>Enquiries</h2>
            <p>
                Fill out the form below and we'll get in touch shortly
            </p>

              <EnquiresFormStyled  
                name="enquries"   
                method="POST"
                data-netlify="true"
                action='/about'
                id="enquries" >

                  <input type="hidden" name="enquries" value="enquries" />

                    <input
                        type="text"
                        name="firstName"
                        placeholder='First Name'
                        value={firstName}
                        pattern="^[a-zA-Z\s-]+$"
                        title="Name cannot contain special characters"
                        required
                        onChange={handleFormValueChange}
                    />
                    <input
                        type="text"
                        name="lastName"
                        placeholder='Last Name'
                        pattern="^[a-zA-Z\s-]+$"
                        title="Name cannot contain special characters"
                        value={lastName}
                        required
                        onChange={handleFormValueChange}
                    />

                <input 
                    type="email"
                    name="email"
                    placeholder='Email address' 
                    value={email}
                    onChange={handleFormValueChange} 
                />


                <select 
                    name="courseSelection"
                    value={courseSelection}
                    onChange={handleFormValueChange}>
                    <option value="">Select a course</option>
                    {
                        courses.map((course) => {
                            return <option key={course} value={course}>{course}</option>
                        })
                    }
                </select>
                <PhoneInputWrapper>
                    <input
                        type="number"
                        placeholder='Mobile Number'
                        name="contactNumber"
                        value={contactNumber}
                        required
                        pattern="^[789]\d{9}$"
                        title="Enter a valid mobile number"
                        onChange={handleFormValueChange}
                    />
                </PhoneInputWrapper>
            <button type="submit">Submit</button>
            </EnquiresFormStyled> 
            </div>
            <GoogleMap />

        </FormDivWrapper>
    </Container>
  )
}

export default EnquiryForm