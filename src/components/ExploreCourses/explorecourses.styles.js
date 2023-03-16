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
export const DisplayCourse = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
gap: 1rem;
`