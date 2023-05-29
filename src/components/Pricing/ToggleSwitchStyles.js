import styled from "styled-components";


export const StyledToggleSwitch = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: auto;
  justify-content: center;
  width: 450px;
  border: 1px solid;
  padding: 1rem;
  font-size: ${(props) => props.theme.fssmall};
  @media only screen and (max-width: 800px) {
    //code goes here
    width: 90%;
  }
  .save20 {
    background-color: #ffd778;
    padding: 0.5rem;
    text-transform: uppercase;
    font-size: ${(props) => props.theme.fsxsmall};
    border-radius: 10px;
  }
  .switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
  }
  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #1e2321;
    -webkit-transition: 0.4s;
    transform: translate(0px, 0px);
    transition: 0.6s ease transform, 0.6s box-shadow;
  }
  .slider:before {
    position: absolute;
    content: '';
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }
  input:checked + .slider {
    background-color: #99f6e0;
  }

  input:focus + .slider {
    box-shadow: 0 0 1px #99f6e0;
  }
  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }
  input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }
`