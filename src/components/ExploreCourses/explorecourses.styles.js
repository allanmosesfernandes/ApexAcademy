import styled from "styled-components";


export const ExploreCoursesSection = styled.section `
margin: 4rem 0 0 0;
h2 {
    font-size: ${(props) => props.theme.fsxl};
    font-family: "Neue Bold";
    color: #fff;
}
@media only screen and (max-width: 600px) {
margin: 5rem 0 0 0;
  h2 {
    font-size: 4rem;
  }
}
`
export const ButtonContainer = styled.div `
display: flex;
gap: 1rem;
`

export const CourseBtn = styled.button `
border-radius: 20px;
background-color: #FFE900;
color: #000;
font-size: 2rem;
transition: all 0.3s ease;

@media only screen and (max-width: 600px) {
    font-size: 1.2rem;
    padding: 1rem;
}
&:hover, 
&:active,
&:focus {
    background-color: #FFC233;
}
`
export const DisplayCourse = styled.div `
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


export const CourseCardsContainer = styled.div `
position: relative;
min-height: 200px;
`

export const CourseCard = styled.div `
position: absolute;
width: 100%;
left: 0;
top:0;
opacity: 0;
transition: all .5s cubic-bezier(0.46, 0.03, 0.52, 0.96);

&.active {
    opacity: 1;

}
`

export const CourseCardFlexContainer = styled.div `
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  justify-content: space-evenly;
`;

export const CourseCardDetails = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 1rem;
  gap: 1rem;
  padding: 2.5rem;
  width: 200px;
  border-radius: 5px;
color: white;
border: 1px solid white;
  img {
    width: 50px;
    height: 50px;
    object-fit: cover;
    margin-bottom: 1rem;
  }

  p {
    text-align: center;
    font-size: 1.5rem;
    margin: 0;
  }
`;