import styled from "styled-components";

export const AboutWrapper = styled.section`

h2{
    border-top: 1px solid black;
    border-bottom: 1px solid black;  
    color:black;
}
p {
border-bottom: 1px solid black; 
padding: 2rem 0;
font-size: ${props => props.theme.fsmedium}; 
}

`

export const AboutImageText = styled.div`

display: grid;
grid-template-columns: 1fr 1fr;
border-bottom: 1px solid black;
img {
    width: 90%;
    border-right: 1px solid black;
    filter: blur(2px);
}
p {
    font-size: ${props => props.theme.fssmall};
    align-items: center;
    display: flex;
    border-bottom: 0
}

@media only screen and (max-width: 600px) {
  //code goes here
  grid-template-columns: 1fr;

  img {
    width: 100%;
}
p {
    text-align: center;
}
}
`

export const AboutStoryContainer = styled.div`
display: grid;
grid-template-columns: 100px 2fr 1fr;
gap: 1rem;

@media only screen and (max-width: 600px) {
  //code goes here
  grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto;

  .a {
    grid-row: 2;
    grid-column: 1;
  }

  .b {
    grid-row: 2;
    grid-column: 2;
  }

  .c {
    grid-row: 1;
    grid-column: 1 / span 2;
  }
}
`

export const Story = styled.div`
border-right: 1px solid black;
h4 {
    writing-mode: tb-rl;
    transform: rotate(-180deg);
    border: none;
    padding: 2rem;
font-size: ${props => props.theme.fslarge};

@media only screen and (max-width: 600px) {
  font-size: ${props => props.theme.fssmall};
    padding: 1rem;

}
}

`
export const TextPiece = styled.div`
p {
    font-size: ${props => props.theme.fsxsmall};
    height: 100%;
    display: flex;
    align-items:center;
}
`

export const SentiImage = styled.img`


`