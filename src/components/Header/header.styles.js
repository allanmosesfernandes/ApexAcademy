import styled from "styled-components";
export const StyledHeader = styled.header`
  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 10vh;
    border-bottom: 2px solid #dcdcdc;
    padding: 2rem;
    width: 100%;
    margin: auto;
    top: 0;
    left: 0;
    position: sticky;
    z-index: 4;
    transition: all 0.5s easein;
    &.header-bg {
      background-color: #ffffff;
      box-shadow: 0 3px 20px rgba(0, 0, 0, 0.2);
      position: inherit;
    }

    h2 {
      font-size: ${(props) => props.theme.fsmedium};
      span {
        position: relative;
        color: ${(props) => props.theme.primaryColor};
        font-weight: 800;
      }

      @media only screen and (max-width: 600px) {
        font-size: ${(props) => props.theme.fsxsmall};
      }
    }
    img {
      width: 100px;
      height: 100px;
    }
  }

@media only screen and (max-width: 600px) {
  //code goes here
  nav {
    padding: 1rem;
  }
}
`
export const LinksRIght = styled.div `
margin-left: auto;
display: flex;
gap: 2rem;
align-items: center;
a {
  color: ${(props) => props.theme.primaryColor};
font-size: ${props => props.theme.fssmall};

position: relative;
   &:after {
        content: '';
        position: absolute;
        bottom: -1px;
        left: 0;
        right: 0;
        width: 100%;
        height: 2px;
        transform: scaleX(0);
        background-color:${props => props.theme.primaryColor};
        transition: transform 0.3s;
    }

    &:hover {
        &:after {
            transform: scaleX(1);    
        }
    }
@media only screen and (max-width: 600px) {
  font-size: ${props => props.theme.fsxsmall};

}
}

`