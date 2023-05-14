import styled from "styled-components";

export const VisionBlock = styled.div `
background-color: ${(props) => props.theme.primaryColor};
padding: 8rem 0;
color: #fff;
display: flex;
flex-direction: column;
margin: auto;
width: 100%;
justify-content: center;
align-items: center;

h4 {
    font-size: 12rem;
    width: min-content;
    border-top: 3px solid white;
    position: relative;
    -webkit-text-fill-color: rgba(255, 255, 255, 0);
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: #fff;

    &:after {
        content: "how students study and make quality education affordable.";
        position: absolute;
        font-size: ${(props) => props.theme.fssmall};
        width: 50%;
        bottom: -50px;
        right: 0;
        -webkit-text-stroke-width: 0;
        -webkit-text-fill-color: white;
        font-family: "Neue Bold";
    }

    @media only screen and (max-width: 600px) {
      font-size: 5rem;
      &:after {
        font-size: 1.3rem;
         bottom: -70px
      }
    }
}
`