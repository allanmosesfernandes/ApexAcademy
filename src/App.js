import GlobalStyleSheet from "./components/styles/global.stylesheet";
import Header from "./components/Header/Header";
import { ThemeProvider } from "styled-components";
import FirstFold from "./components/FirstFold/FirstFold";
function App() {

  const theme = {
    primaryColor: "#f70",
    fsxl: "6.5rem",
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
    </div>
    </ThemeProvider>
    </>

  );
}

export default App;
