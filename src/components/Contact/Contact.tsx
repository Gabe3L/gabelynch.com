import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <section className="section" id="contact">
      <div className="container">
        <header className="sectionHeader">
          <h1>Contact</h1>
          <h2>Contact</h2>
        </header>

        <div className="row">
          <a
            href="mailto:contact@gabelynch.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.logoContainer}
          >
            <EmailIcon className={styles.logoImage} />
          </a>
          <a
            href="https://www.linkedin.com/in/gabe-lynch/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.logoContainer}
          >
            <LinkedInIcon className={styles.logoImage} />
          </a>
          <a
            href="https://github.com/Gabe3L"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.logoContainer}
          >
            <GitHubIcon className={styles.logoImage} />
          </a>
        </div>
      </div>
    </section>
  );
};
