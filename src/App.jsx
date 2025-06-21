import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import About from "./pages/About";
import Certificates from "./pages/Certificates";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import Header from "./pages/Header";
import Hero from "./pages/Hero";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import ThankYou from "./pages/ThankYou";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        {/* Home Route */}
        <Route path="/" element={
          <div className="app-container">
            <Header />
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Certificates />
            <Contact />
            <Footer />
          </div>
        } />

        {/* Thank You Route */}
        <Route path="/thankyou" element={<ThankYou />} />
      </Routes>
    </>
  );
}

export default App;
