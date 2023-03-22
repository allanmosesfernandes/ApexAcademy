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

img {
    width: 90%;
}
p {
    font-size: ${props => props.theme.fssmall};
    align-items: center;
    display: flex;
}
`

export const AboutStoryContainer = styled.div`


`