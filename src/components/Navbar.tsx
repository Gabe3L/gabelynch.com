import styles from "./Navbar.module.css";
import global from "../styles/global.module.css"
// import animations from "../css/animation.module.css";

export const Navbar = () => {
  return (
    <div className={global.container}>
      <a className={styles.navbarLogo} href="index.html">
        Gabe Lynch
      </a>

      <button className={styles.navbarToggle}>&#9776;</button>

      <ul className={styles.navbarMenu}>
        <li>
          <a href="#home-section" className={styles.navbarLink}>
            Home
          </a>
        </li>
        <li>
          <a href="#about-me-section" className={styles.navbarLink}>
            About
          </a>
        </li>
        <li>
          <a href="#resume-section" className={styles.navbarLink}>
            Resume
          </a>
        </li>
        <li>
          <a href="#technologies-section" className={styles.navbarLink}>
            Technologies
          </a>
        </li>
        <li>
          <a href="#projects-section" className={styles.navbarLink}>
            Projects
          </a>
        </li>
        <li>
          <a href="#contact-section" className={styles.navbarLink}>
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};
