import styled from "styled-components";

export const ContactSection = styled.section`
display: grid;
grid-template-columns: 1.5fr 2fr;
gap: 2rem;
margin: 5rem 0 3rem 0;
h2 {
    color:  ${(props) => props.theme.primaryColor};
}
p {
    font-size: ${(props) => props.theme.fssmall};
    color: #000;
    margin: 2rem 0;
}

@media only screen and (max-width: 600px) {
  grid-template-columns: 1fr;

  h2 {
    font-size: 
  }
}
`

export const Contact__Left  = styled.div`
img {
  width: 90%;
  margin: 2rem auto;
}
`

export const Contact__Right  = styled.div`
.contact__block {
display: flex;
gap: 3rem;
padding: 2rem 0;
align-items: flex-start;
border-bottom: 1px solid gray;

&:last-child {
    border-bottom: 0;
}

.contact__contents {

    h3 {
        font-size: ${(props) => props.theme.fsmedium};
    }

    p {
        margin: 1rem 0;
    }
    display: flex;
    flex-direction: column;
}
@media only screen and (max-width: 600px) {
  //code goes here
  .contact__contents {
    h3 {
        font-size: ${(props) => props.theme.fssmall};
    }
    p {
        font-size: ${(props) => props.theme.fsxsmall};
    }
  }


}
}
`