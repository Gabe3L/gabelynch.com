import { Navbar } from "./sections/Navbar/Navbar";
import { Hero } from "./sections/Hero/Hero";
import { About } from "./sections/About/About";
import { Resume } from "./sections/Resume/Resume";
import { Projects } from "./sections/Projects/Projects";
import { Contact } from "./sections/Contact/Contact";
import { Footer } from "./sections/Footer/Footer";
import { DotGrid } from "./components/Background/Background";

import "./styles.css";

function App() {
  return (
    <div>
      <Navbar />
      <DotGrid />
      <Hero />
      <About />
      <Resume />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
