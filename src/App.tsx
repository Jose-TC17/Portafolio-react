import Contact from "./assets/pages/Contact/Contact";
import Experience from "./assets/pages/Experience/Experience";
import { Footer } from "./assets/components/Footer/Footer";
import Header from "./assets/components/Header/Header";
import Main from "./assets/pages/Main/Main";
import Projects from "./assets/pages/Projects/Projects";
import SeeMore from "./assets/pages/SeeMore/SeeMore";
import Skills from "./assets/pages/Skills/Skills";
import "./index.css";

function App() {
  return (
    <>
      <Header />
      <Main />
      <SeeMore />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
