import GlobalStyleSheet from "./components/styles/global.stylesheet";
import Header from "./components/Header/Header";
import { ThemeProvider } from "styled-components";
import FirstFold from "./components/FirstFold/FirstFold";
import Values from "./components/Values/Values"


function App() {

  const theme = {
    primaryColor: "#FF7700",
    themeColor: "#FF0042",
    fsxl: "7.5rem",
    fslarge: "5rem",
    fsmedium: "3rem",
    fssmall: "2rem"
  }


  return (

    <>
    <ThemeProvider theme={theme}>
    <GlobalStyleSheet />
    <div className="App">
      <Header />
      <FirstFold />
    <Values />

    </div>
    </ThemeProvider>
    </>

  );
}

export default App;
