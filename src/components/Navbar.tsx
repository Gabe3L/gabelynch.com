export const Navbar = () => {
  return (
    <nav id="navbar">
      <div className="container">
        <a className="navbar-logo" href="index.html">
          Gabe Lynch
        </a>

        <button className="navbar-toggle">&#9776;</button>

        <ul className="navbar-menu">
          <li>
            <a href="#home-section" className="navbar-link">
              Home
            </a>
          </li>
          <li>
            <a href="#about-me-section" className="navbar-link">
              About
            </a>
          </li>
          <li>
            <a href="#resume-section" className="navbar-link">
              Resume
            </a>
          </li>
          <li>
            <a href="#technologies-section" className="navbar-link">
              Technologies
            </a>
          </li>
          <li>
            <a href="#projects-section" className="navbar-link">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact-section" className="navbar-link">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
