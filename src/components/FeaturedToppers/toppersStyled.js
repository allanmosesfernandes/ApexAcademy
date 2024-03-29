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
}
`

export const ToppersCard = styled.div`
  /* border: 3px solid ${(props) => props.theme.primaryColor}; */
  padding: 2rem;
  width: 90% !important;
  box-shadow: rgba(100, 100, 111, 0.2) 2px 2px 2px 2px;
  height: 90%;
  margin: 2rem auto;
  @media only screen and (max-width: 600px) {
    //code goes here
    width: 100% !important;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 5px 2px 0px;
  }
  .third {
    h3,
    h4,
    p {
      text-align: center;
    }
    p {
      color: ${(props) => props.theme.primaryColor};
      font-weight: 500;
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
    /* justify-content: space-between; */
    gap: 1rem;
    align-items: center;
    justify-content: center;
    p {
      text-align: center;
      margin-bottom: 0;
      font-size: ${(props) => props.theme.fsmedium};
      font-weight: 500;
    }
    .cap,
    .college {
      font-size: 4rem;
    }
    div {
      display: flex;
      gap: 1rem;
      align-items: center;
    }
  }
  img {
    width: 250px;
    height: 250px;
    border-radius: 50%;
    object-fit: cover;
    object-position: top center;
    margin: auto;
    position: relative;
    background-image: url();
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
