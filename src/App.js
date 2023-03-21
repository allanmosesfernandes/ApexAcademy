import GlobalStyleSheet from "./components/styles/global.stylesheet";
import Header from "./components/Header/Header";
import { ThemeProvider } from "styled-components";
import FirstFold from "./components/FirstFold/FirstFold";
import Values from "./components/Values/Values"
import ExploreCourses from "./components/ExploreCourses/ExploreCourses";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/Contact";
import Vision from "./components/Vision/Vision";

function App() {
  const theme = {
    primaryColor: "#4353FF",
    secondaryColor: "#F3F3F3",
    themePink: "#D782BA",
    themeGreen: "#29524A",
    themeColor: "#FFFFFF",
    fsxl: "7.5rem",
    fslarge: "5rem",
    fsmedium: "3rem",
    fssmall: "2rem",
    fsxsmall: "1.3rem"
  }

  return (

    <>
    <ThemeProvider theme={theme}>
    <GlobalStyleSheet />
    <div className="App">
      <Header />
      <FirstFold />
      <ExploreCourses />
      <Values />
      <Testimonials />
      <Vision />
      <Contact />
    </div>
    </ThemeProvider>
    </>

  );
}

export default App;
