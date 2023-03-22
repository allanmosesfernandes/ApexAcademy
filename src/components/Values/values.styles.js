import styled from "styled-components";

export const ValuesContainer = styled.div `
    display: flex;
    flex-direction: column;
    gap: 3rem;
    margin-bottom: 3rem;
   h2 {
    color: ${(props) => props.theme.primaryColor};
    text-align: center;
   }
    @media only screen and (max-width: 600px) {
    grid-template-columns: 1fr;
    margin-bottom: 1.5rem;
    gap: 3rem
}
`

export const ValueCard = styled.div `

.values-inital {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    h2 {
      font-size: ${(props) => props.theme.fsmedium};  
    }
    p {
        font-size: ${(props) => props.theme.fssmall};
    }

}

span {
    font-size: ${(props) => props.theme.fssmall};
    padding: 3rem;

}
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

    @media only screen and (max-width: 600px) {
      //code goes here
      width: 50px;
    }
}
display: flex;
flex-direction: column;
aspect-ratio: 1;
@media only screen and (max-width: 600px) {
  aspect-ratio: inherit;
}
align-items: center;
text-align: center;
cursor: pointer;
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

export const Approach__container = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
gap: 2rem;
margin: 2rem 0;

img {
  width: 80%;
  margin: auto;
}
span {
    font-size: ${(props) => props.theme.fsxsmall};
    color: ${(props) => props.theme.themeGreen};
    font-family: "Neue ExtraBold";

}

h4 {
    font-size: ${(props) => props.theme.fslarge};
        font-family: "Neue Bold";

}

p{
    font-size: ${(props) => props.theme.fssmall};

}
@media only screen and (max-width: 600px) {
  //code goes here
  grid-template-columns: 1fr;

  h4 {
        font-size: ${(props) => props.theme.fsmedium};
  }
  p {
        font-size: ${(props) => props.theme.fssmall};

  }
}

&.reverse {
  @media only screen and (max-width: 600px) {
  //code goes here
  display:flex;
  flex-direction: column-reverse
}
}
`

export const Approach_Div_Right = styled.div`


`