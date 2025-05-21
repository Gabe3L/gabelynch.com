import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import styles from "./Contact.module.css";
import global from "../../styles/global.module.css"
import animations from "../../styles/animations.module.css";

export const Contact = () => {
  return (
    <section className={global.section}>
      <div className={global.container}>
        <header
          className={`${global.sectionHeader} ${animations.animateOnScroll}`}
        >
          <h1>Contact</h1>
          <h2>Contact</h2>
        </header>

        <div className={global.row}>
          <a
            href="mailto:contact@gabelynch.com"
            className={styles.icon}
          >
            <EmailIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/gabe-lynch/"
            className={styles.icon}
          >
            <LinkedInIcon />
          </a>
          <a
            href="https://github.com/Gabe3L"
            className={styles.icon}
          >
            <GitHubIcon />
          </a>
        </div>
      </div>
    </section>
  );
};
