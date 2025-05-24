import styles from "./Navbar.module.css";
import global from "../../styles/global.module.css"
// import animations from "../css/animation.module.css";

export const Navbar = () => {
  return (
    <div className={global.container}>
      <button className={styles.navbarToggle}>&#9776;</button>

      <ul className={styles.navbarMenu}>
        <li>
          <a href="#home" className={styles.navbarLink}>
            Home
          </a>
        </li>
        <li>
          <a href="#about-me" className={styles.navbarLink}>
            About
          </a>
        </li>
        <li>
          <a href="#resume" className={styles.navbarLink}>
            Resume
          </a>
        </li>
        <li>
          <a href="#skills" className={styles.navbarLink}>
            Skills
          </a>
        </li>
        <li>
          <a href="#projects" className={styles.navbarLink}>
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" className={styles.navbarLink}>
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};
