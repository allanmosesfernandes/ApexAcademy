import GlobalStyleSheet from "./components/styles/global.stylesheet";
import Header from "./components/Header/Header";
import { ThemeProvider } from "styled-components";


function App() {
  return (
    <>
    <GlobalStyleSheet />
    <div className="App">
      <Header />
      <h1>Hello World!</h1>
    </div>
    </>

  );
}

export default App;
