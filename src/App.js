import React from "react";
import Layout from "./components/layout/Layout";
import About from "./pages/about/About";
import TechStack from "./pages/techstack/TechStack";
import Project from "./pages/projects/Project";
import Education from "./pages/education/Education";
import WorkExp from "./pages/workexp/WorkExp";
import ScrollToTop from "react-scroll-to-top";
import { useTheme } from "./context/ThemeContext";
import Mobilenav from "./components/mobile/Mobilenav";
import Footer from "./components/footer/Footer";

function App() {
  const [theme] = useTheme();
  return (
    <>
      <div id={theme}>
        <Mobilenav />
        <Layout />
        <div className="container">
          <About />
          <Education />
          <TechStack />
          <Project />
          <WorkExp />
        </div>
        <Footer />
        {/* <div className="footer pb-3 ms-3">
          <h4 className="text-center">
            Made With 💖 Aayush Singh &copy; {new Date().getFullYear()}
          </h4>
        </div> */}
      </div>
      <ScrollToTop
        smooth
        color="#fff"
        style={{
          backgroundColor: "#ff0090",
          borderRadius: "50px",
          boxShadow:
            "rgba(240, 46, 170, 0.4) 0px 5px, rgba(240, 46, 170, 0.3) 0px 10px, rgba(240, 46, 170, 0.2) 0px 15px, rgba(240, 46, 170, 0.1) 0px 20px, rgba(240, 46, 170, 0.05) 0px 25px",
        }}
      />
    </>
  );
}

export default App;
