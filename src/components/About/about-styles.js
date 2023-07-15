import styled from 'styled-components'
export const AboutWrapper = styled.section`
  .blue-emphasis {
    color: ${(props) => props.theme.primaryColor};
    font-weight: bold;
  }
  h2 {
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    color: black;
  }
  p {
    /* border-bottom: 1px solid black; */
    padding: 2rem 0;
    font-size: ${(props) => props.theme.fsmedium};
  }
  @media only screen and (max-width: 600px) {
    //code goes here
    h2 {
      font-size: ${(props) => props.theme.fssmall};
      padding: 2rem 0;
    }
    p {
      font-size: ${(props) => props.theme.fssmall};
    }
  }
`

export const AboutImageText = styled.div`
  display: grid;
  grid-template-columns: 40% 1fr;
  border-top: 1px solid black;
  p {
    font-size: ${(props) => props.theme.fssmall};
  }
  .slick-prev,
  .slick-next {
    display: none !important;
  }
  img {
    max-width: 100%;
    padding: 2rem;
  }
  .slick-dots {
    bottom: 0;
  }
  @media only screen and (max-width: 600px) {
    //code goes here
    .slick-dots {
      bottom: -20px;
    }
    .slick-prev,
    .slick-next {
      display: none !important;
    }

    .blue-emphasis {
      text-decoration: underline;
    }
    p {
      font-size: ${(props) => props.theme.fssmall};
      align-items: center;
      border-bottom: 0;
      margin: auto;
    }
  }
  @media only screen and (max-width: 600px) {
    //code goes here
    grid-template-columns: 100%;
    grid-template-rows: auto auto;
    img {
      width: 100%;
      padding: 0;
    }
    p {
      text-align: left;
      font-size: ${(props) => props.theme.fsxsmall};
    }
  }
`

export const AboutStoryContainer = styled.div`
  display: grid;
  grid-template-columns: 100px 2fr 1fr;
  border-top: 1px solid black;
  gap: 1rem;
  .blue-emphasis {
    text-decoration: underline;
  }
  .c {
    filter: grayscale(0);
    margin: auto;
  }
  @media only screen and (max-width: 600px) {
    //code goes here
    grid-template-columns: 1fr;
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
      aspect-ratio: 1/1;
      object-fit: contain;
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
    font-size: ${(props) => props.theme.fslarge};

    @media only screen and (max-width: 600px) {
      font-size: ${(props) => props.theme.fsxsmall};
      padding: 1rem;
    }
  }
`
export const TextPiece = styled.div`
  p {
    font-size: ${(props) => props.theme.fssmall};
    height: 100%;
    @media only screen and (max-width: 600px) {
      //code goes here
      font-size: ${(props) => props.theme.fsxsmall};
    }
    .blue-emphasis {
      color: ${(props) => props.theme.primaryColor};
      font-weight: bold;
    }
    align-items: center;
  }
`

export const SentiImage = styled.img``
