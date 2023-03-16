import styled from "styled-components";


export const ExploreCoursesSection = styled.section`
h2 {
    font-size: ${(props) => props.theme.fsxl};
    font-family: "Neue Bold";
    color: #fff;
}
@media only screen and (max-width: 600px) {
  h2 {
    font-size: 4rem;
  }
}
`
export const ButtonContainer = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
gap: 1rem;
`

export const CourseBtn = styled.button`
border-radius: 20px;
background-color: #FFE900;
color: #000;
font-size: 2rem;
transition: all 0.3s ease;

&:hover, 
&:active,
&:focus {
    background-color: #FFC233;
}
`
export const DisplayCourse = styled.div`
display: grid;
grid-template-columns: 1fr;
gap: 1rem;
margin: 2rem 0;

h3 {
    font-size: ${(props) => props.theme.fslarge}
}

p {
    font-size: ${(props) => props.theme.fsmedium}
}
`


export const CourseCardsContainer = styled.div`
position: relative;

`

export const CourseCard = styled.div`
position: absolute;
left: 0;
top:0;
opacity: 0;
transition: all .5s cubic-bezier(0.46, 0.03, 0.52, 0.96);

&.active {
    opacity: 1;
    
}
`

