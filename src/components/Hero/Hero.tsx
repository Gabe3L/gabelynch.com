import styles from "./Hero.module.css";

import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import { motion } from "framer-motion";

export const Hero = () => {
  const fadeUp = {
    initial: { y: 20, opacity: 1 },
    animate: { y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  return (
    <section className={styles.hero} id="home">
      <div className={styles.heroBackground} />
      <div className="container">
        <div className={styles.mainText}>
          <motion.h1 {...fadeUp}>
            Hello! <span>I'm</span>
          </motion.h1>
          <motion.h2 {...fadeUp}>
            Gabe Lynch
          </motion.h2>
          <motion.h3 {...fadeUp}>
            A software developer and student from London, ON, Canada.
          </motion.h3>
        </div>
      </div>
      <div className={styles.links}>
        <motion.a
          className="gmail"
          href="mailto:contact@gabelynch.com"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1, transition: { duration: 0.1 } }}
          whileTap={{ scale: 0.9, transition: { duration: 0.1 } }}
        >
          <EmailIcon className="gmail-icon social-icon" />
        </motion.a>
        <motion.a
          className="github"
          href="https://github.com/Gabe3L"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1, transition: { duration: 0.1 } }}
          whileTap={{ scale: 0.9, transition: { duration: 0.1 } }}
        >
          <GitHubIcon className="github-icon social-icon" />
        </motion.a>
        <motion.a
          className="linkedin"
          href="https://www.linkedin.com/in/gabe-lynch/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1, transition: { duration: 0.1 } }}
          whileTap={{ scale: 0.9, transition: { duration: 0.1 } }}
        >
          <LinkedInIcon className="linkedin-icon social-icon" />
        </motion.a>
      </div>
    </section>
  );
};
