import { createGlobalStyle } from "styled-components";
import NeueBold from "../../assets/fonts/NM-Regular.otf";
import NeueExtraBold from "../../assets/fonts/NM-Ultra.otf";
import Pattern from "../../assets/images/WhyApex/bg-tablet-pattern.svg";

const GlobalStyleSheet = createGlobalStyle`
  @font-face {
    font-family: "Neue Bold";
    src: url(${NeueBold}) format("opentype");
    font-weight: normal;
    font-style: normal;
  }
  
  @font-face {
    font-family: "Neue ExtraBold";
    src: url(${NeueExtraBold}) format("opentype");
    font-weight: normal;
    font-style: normal;
  }
*,
*::before,
*::after {
  box-sizing: border-box;
}
html {
  font-size: 62.5%;
  scroll-behavior: smooth;
}

body {
  background-image: url(${Pattern});
  background-repeat: no-repeat;
  background-position: center right;
  z-index: -1;
  background-size: 500px;

  @media screen and (max-width: 768px) {
    background-size: 300px;
    background-position: top right;
  }
}
/* Remove default margin */
body,
h1,
h2,
h3,
h4,
p,
figure,
blockquote,
dl,
dd {
font-family: 'Space Grotesk', sans-serif;  
margin: 0;
}

h1,h2,h3,h4,h5,h6 {
  font-weight: 500;
  font-family: "Neue ExtraBold";

}

p {
  font-weight: 300;
}

/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
ul[role='list'],
ol[role='list'] {
  list-style: none;
}
 
/* Set core root defaults */
html:focus-within {
  scroll-behavior: smooth;
}

/* Set core body defaults */
body {
  min-height: 100vh;
  text-rendering: optimizeSpeed;
  line-height: 1.5;
}

/* A elements that don't have a class get default styles */
a:not([class]) {
  text-decoration-skip-ink: auto;
}

/* Make images easier to work with */
img,
picture {
  max-width: 100%;
  display: block;
}

/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
  font: inherit;
}
a {
  color: inherit;
  text-decoration: none;
}

/* Button Reset */

button {
    display: inline-block;
    border: none;
    padding: 1rem 2rem;
    margin: 0;
    text-decoration: none;
    background: #0069ed;
    color: #ffffff;
    font-family: sans-serif;
    font-size: 1rem;
    cursor: pointer;
    text-align: center;
    transition: background 250ms ease-in-out, 
    transform 150ms ease;
    -webkit-appearance: none;
    -moz-appearance: none;
}

// button:hover,
// button:focus {
//     background: #0053ba;
// }

// button:focus {
//     outline: 1px solid #fff;
//     outline-offset: -4px;
// }

// button:active {
//     transform: scale(0.99);
// }

body {
  background-color: ${(props) => props.theme.themeColor}
}

.slick-prev:before, .slick-next:before {
    color: #4353FF;
    font-size: 30px;
}

@media only screen and (max-width: 600px) {


.slick-prev:before, .slick-next:before {
    display: none;
}

}
`

export default GlobalStyleSheet