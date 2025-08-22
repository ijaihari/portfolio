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
import { Analytics } from "@vercel/analytics/react"
function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={
          <div className="app-container">
            <Analytics />
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
        <Route path="/thankyou" element={<ThankYou />} />
      </Routes>
    </>
  );
}

export default App;
