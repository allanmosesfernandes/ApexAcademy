import styled from "styled-components";

export const Vision_Block = styled.div`
background-color: #29524A;
padding: 8rem 0;
color: #fff;
display: flex;
flex-direction: column;
margin: auto;
width: 100%;
justify-content: center;
align-items: center;
h4 {
    font-size: 12rem;
    width: min-content;
    border-top: 3px solid pink;
    position: relative;
    &:after {
        content: "how students study and make quality education affordable.";
        position: absolute;
        font-size: ${(props) => props.theme.fssmall};
        width: 50%;
        bottom: -50px;
        right: 0;
    }
}

`