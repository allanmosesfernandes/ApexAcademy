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
.pattern-bg {
width: 100%;
height: 50%;
    background-color: #ffffff;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='12' viewBox='0 0 20 12'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='charlie-brown' fill='%234353ff' fill-opacity='0.4'%3E%3Cpath d='M9.8 12L0 2.2V.8l10 10 10-10v1.4L10.2 12h-.4zm-4 0L0 6.2V4.8L7.2 12H5.8zm8.4 0L20 6.2V4.8L12.8 12h1.4zM9.8 0l.2.2.2-.2h-.4zm-4 0L10 4.2 14.2 0h-1.4L10 2.8 7.2 0H5.8z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");

&:hover{
    transform: rotate(2deg)
}
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