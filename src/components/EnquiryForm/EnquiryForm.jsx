import React from 'react'
import Container from '../styles/container.stylesheet'
import { useState } from 'react'
import { FormDivWrapper, EnquiresFormStyled } from './enquiryForm.styles'

const EnquiryForm = () => {
    const defaultFormFields = {
        firstName: "",
        lastName: "",
        email: "",
        contactNumber: "",
        courseSelection: "",
        challengingSubjects: ""
    }

    const [ formFields, setFormFields ] = useState(defaultFormFields);
    const { firstName, lastName, email, contactNumber } = formFields;

    const handleFormValueChange = (event) => {
        const { name, value } = event.target;
        setFormFields({...formFields, [name]:value})
    }

    const handleSubmit = () => {
        
    }
  return (
    <Container>
        <FormDivWrapper>
            <div>
            <h2>Enquiries</h2>
            <p>
                Fill out the form below and we'll get in touch shortly
            </p>
            <EnquiresFormStyled onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="firstName"
                        placeholder='First Name'
                        value={firstName}
                        required
                        onChange={handleFormValueChange}
                    />
                    <input
                        type="text"
                        name="lastName"
                        placeholder='Last Name'
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
            
            <button type="submit">Submit</button>
            </EnquiresFormStyled>
            </div>


        </FormDivWrapper>
    </Container>
  )
}

export default EnquiryForm