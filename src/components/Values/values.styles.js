import styled from "styled-components";

export const ValuesContainer = styled.div `
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1rem;

    @media only screen and (max-width: 600px) {
    grid-template-columns: 1fr;
}
`

export const ValueCard = styled.div `

&.active {
.values-inital {
    transition: opacity .5s cubic-bezier(0.46, 0.03, 0.52, 0.96);
    opacity: 0;
}
span {
opacity: 1;
top: 20%;
transition: opacity .5s cubic-bezier(0.46, 0.03, 0.52, 0.96);
}
}
img {
    margin: auto;
}
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
justify-content: center;
background-color: #FFE900;
margin: auto;
padding: 3rem;
width: 100%;
height: 100%;
gap: 2rem;
position: relative;
transition: all .5s cubic-bezier(0.46, 0.03, 0.52, 0.96);
span {
    opacity: 0;
    position: absolute;
    left: 0;
    top: 900;
}

@media only screen and (min-width: 600px) {
  &:hover {
transform: translateY(-5%);

.values-inital {
    opacity: 0;
} 
span {
opacity: 1;
top: 20%;
transition: opacity .5s cubic-bezier(0.46, 0.03, 0.52, 0.96);
}}
}
`

export const PurpleToggle = styled.img `
display: none;
transition: all 0.3s ease;
&.active {
    transform: rotate(224deg);
}
@media only screen and (max-width: 600px) {
  display: block;
}


`