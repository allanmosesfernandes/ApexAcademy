import GlobalStyleSheet from "./components/styles/global.stylesheet";
import Header from "./components/Header/Header";
import { Routes,Route } from 'react-router-dom';

import { ThemeProvider } from "styled-components";
import FirstFold from "./components/FirstFold/FirstFold";
import Values from "./components/Values/Values"
import ExploreCourses from "./components/ExploreCourses/ExploreCourses";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/Contact";
import Vision from "./components/Vision/Vision";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import PageNotFound from "./components/404/PageNotFound";
import EnquiryForm from "./components/EnquiryForm/EnquiryForm";
import PricingContainer from "./components/Pricing/PricingContainer";


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
          <Header />
          <Routes>
            <Route index path="/" element={<FirstFold />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<EnquiryForm />} />
            <Route path="pricing" element={<PricingContainer />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
          <Footer />
      </ThemeProvider>
    </>


  );
}

export default App;
