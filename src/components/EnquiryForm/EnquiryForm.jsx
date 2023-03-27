import React from 'react'
import Container from '../styles/container.stylesheet'
import { useState } from 'react'

const EnquiryForm = () => {
    const defaultFormFields = {
        firstName: "",
        lastName: "",
        email: "",
        mobile: "",
        courseSelection: "",
        challengingSubjects: ""
    }

    const [ formFields, setFormFields ] = useState(defaultFormFields);
    const { firstName, lastName } = formFields;

  return (
    <Container>
        <h2>Enquiries</h2>
        <p>
            Fill out the form below and we'll get in touch shortly
        </p>
        <form>
            <label>First Name: </label>
            <input type="text" placeholder='Rahul' value={firstName} />
            <label>Last Name: </label>
            <input type="text" placeholder='Rahul' value={firstName} />
       
        </form>
    </Container>
  )
}

export default EnquiryForm