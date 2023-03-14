import GlobalStyleSheet from "./components/styles/global.stylesheet";
import Header from "./components/Header/Header";
import { ThemeProvider } from "styled-components";


function App() {

  const theme = {
    primaryColor: "#f70"
  }


  return (
    <>
    <ThemeProvider theme={theme}>
    <GlobalStyleSheet />
    <div className="App">
      <Header />
      <h1>Hello World!</h1>
    </div>
    </ThemeProvider>
    </>

  );
}

export default App;
