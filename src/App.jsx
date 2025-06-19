import About from "./pages/About";
import Footer from "./pages/Footer";
import Header from "./pages/Header";
import Hero from "./pages/Hero";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";

function App() {
  return (
    <div className="app-container">
      <Header />
      <Hero />
      <About/>
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;