import styled from 'styled-components'

export const ToppersContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  h2 {
    font-size: ${(props) => props.theme.fsxl};
    line-height: 1.2;
    font-family: 'Neue ExtraBold';
    color: ${(props) => props.theme.primaryColor};
    display: flex;
    gap: 2rem;
    text-align: center;
    justify-content: center;
    span {
      color: #fff;
      position: relative;
    }
    @media only screen and (max-width: 600px) {
      font-size: 4rem;
    }
  }

p {
  font-size: ${(props) => props.theme.fssmall};
  width: 75%;
  margin: 2rem auto;
  text-align: center;
}
@media only screen and (max-width: 600px) {
  p {
  font-size: ${(props) => props.theme.fsxsmall};
  width: 100%;
}
`

export const ToppersCard = styled.div`
  border: 3px solid ${(props) => props.theme.primaryColor};
  padding: 2rem;
  width: 90% !important;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

  .third {
    h3,
    h4,
    p {
      text-align: center;
    }

    h3 {
      font-size: ${(props) => props.theme.fslarge};
      @media only screen and (max-width: 600px) {
        //code goes here
        font-size: ${(props) => props.theme.fsmedium};
      }
    }

    p {
      margin: 0;
    }
  }

  .second {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 1rem;

    .cap,
    .college {
      font-size: 3rem;
    }
    div {
      display: flex;
      gap: 1rem;
      align-items: center;
    }
  }
  img {
    width: 150px;
    height: 205px;
    object-fit: cover;
    margin: auto;
  }

  p {
    width: 100%;
    text-align: left;
  }
`

export const ToppersCardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;
`
