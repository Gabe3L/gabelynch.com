import { Navbar } from "./layouts/Navbar/Navbar";
import { Hero } from "./layouts/Hero/Hero";
import { About } from "./layouts/About/About";
import { Resume } from "./layouts/Resume/Resume";
import { Projects } from "./layouts/Projects/Projects";
import { Contact } from "./layouts/Contact/Contact";
import { Footer } from "./layouts/Footer/Footer";
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
