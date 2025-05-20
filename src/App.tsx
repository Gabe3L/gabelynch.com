import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Resume } from "./components/Resume";
import { Technologies } from "./components/Technologies";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Resume />
      <Technologies />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
