import styled from "styled-components";

export const StyledHeader = styled.header `

nav {
display: flex;
align-items: center;
justify-content: space-between;
height: 10vh;
gap: 1rem;
h2 {
    span {
        color: ${props => props.theme.primaryColor};
        font-weight: 800;
    }
}
img {
    width: 100px;
    height: 100px;
}
}

`
export const LinksRIght = styled.div `
margin-left: auto;
display: flex;
gap: 1rem;

a {
color: ${props => props.theme.primaryColor};
position: relative;
   &:after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        width: 100%;
        height: 3px;
        transform: scaleX(0);
        background-color:${props => props.theme.primaryColor};
        transition: transform 0.3s;
    }

    &:hover {
        &:after {
            transform: scaleX(1);    
        }
    }

}

`