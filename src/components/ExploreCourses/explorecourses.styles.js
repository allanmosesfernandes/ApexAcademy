import styled from "styled-components";

export const ExploreCoursesSection = styled.section`
  margin: 4rem 0 0 0;
  h2 {
    color: ${(props) => props.theme.primaryColor};
    font-family: 'Neue ExtraBold';
  }

  p {
    font-size: ${(props) => props.theme.fssmall};
    width: 75%;
  }
  @media only screen and (max-width: 600px) {
    p {
      font-size: ${(props) => props.theme.fsxsmall};
      width: 100%;
    }
  }
`
export const ButtonContainer = styled.div `
display: flex;
gap: 1rem;
flex-wrap: wrap;
margin: 2rem 0;

`

export const CourseBtn = styled.button `
border-radius: 10px;
background-color: ${(props) => props.theme.themeGreen};
color: #fff;
font-size: 2rem;
transition: all 0.3s ease;

@media only screen and (max-width: 600px) {
    font-size: 1.2rem;
    padding: 1rem 2rem;
}
&:hover, 
&:active,
&:focus {
    background-color: rgb(59 124 111);
}
`
export const DisplayCourse = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  margin: 2rem 0;

  h3 {
    font-size: ${(props) => props.theme.fslarge};
  }

  p {
    font-size: ${(props) => props.theme.fsmedium};
  }

  @media only screen and (max-width: 600px) {
    //code goes here
    h3 {
      font-size: ${(props) => props.theme.fsmedium};
    }
  }
`


export const CourseCardsContainer = styled.div `
position: relative;
min-height: 450px;

@media only screen and (max-width: 600px) {
  min-height: 400px;
}
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

@media only screen and (max-width: 800px) {
  //code goes here
  position: relative;
}
`

export const CourseCardFlexContainer = styled.div `
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

export const CourseCardDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 1rem;
  gap: 1rem;
  padding: 2.5rem;
  width: 200px;
  border-radius: 20px;
  color: #000;
  background-color: ${(props) => props.theme.secondaryColor};

  &:hover {
    .CourseCardDetails {
      transform: scale(1.02);
    }
  }

  img {
    width: 50px;
    height: 50px;
    object-fit: cover;
    margin-bottom: 1rem;
  }

  @media only screen and (max-width: 600px) {
    width: 150px;
    padding: 1.5rem;
    justify-content: space-evenly;
    img {
      width: 30px;
      height: 30px;
    }
  }

  p {
    text-align: center;
    font-size: 1.5rem;
    margin: 0;
  }
`



export const SubjectTitle = styled.h3`
  font-size: ${(props) => props.theme.fsmedium};
  color: ${(props) => props.theme.primaryColor};
`
export const YearTitle = styled.h4`
  font-size: ${(props) => props.theme.fssmall};
  color: ${(props) => props.theme.primaryColor};
`
export const FilteredTable = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  border: 3px solid;
  padding: 2rem;
  ul.subjects__list > li {
    font-size: 1.5rem !important;
  }
  @media only screen and (max-width: 600px) {
    //code goes here
    grid-template-columns: 1fr;
    h4 {
      border-bottom: 2px solid black;
    }
  }

  h4 {
    font-size: ${(props) => props.theme.fssmall};
    color: ${(props) => props.theme.themeGreen};
  }
  ul > li {
    font-size: ${(props) => props.theme.fsxsmall};
  }
`