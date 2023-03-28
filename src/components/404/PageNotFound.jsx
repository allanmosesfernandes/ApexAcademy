import React from 'react'
import Container from '../styles/container.stylesheet'
import { PageNotFoundStyles } from './404-styles'
import  Illustration from "../../assets/images/404/7.svg"
import { Link } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <Container>
      <PageNotFoundStyles>
        <h2>Page not found!</h2>
        <img src={Illustration} alt="Page not found illustration" />
      <button>
      
      <Link to="/">Return to Home-page</Link>
     </button>
      </PageNotFoundStyles>

     
    </Container>
  )
}

export default PageNotFound