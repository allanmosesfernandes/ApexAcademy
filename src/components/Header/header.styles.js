import styled from "styled-components";

export const StyledHeader = styled.header `

nav {
display: flex;
align-items: center;
justify-content: space-between;
height: 10vh;
h2 {
    span {
        color: ${props => props.theme.primaryColor}
    }
}
img {
    width: 100px;
}
}

`