import styles from "./Hero.module.css";
import global from "../../styles/global.module.css";
import animations from "../../styles/animations.module.css";

import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.heroBackground} />
      <div className={global.container}>
        <div className={`${styles.mainText} ${animations.animateOnScroll}`}>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
          >
            Hello! <span>I'm</span>
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            Gabe Lynch
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
          >
            A software developer and student from London, ON, Canada.
          </motion.h3>
        </div>
      </div>
      <div className={styles.links}>
        <motion.a
          className="gmail"
          href="mailto:contact@gabelynch.com"
          initial={{ opacity: 0, y: 150 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
        >
          <EmailIcon className="gmail-icon social-icon" />
        </motion.a>
        <motion.a
          className="github"
          href="https://github.com/Gabe3L"
          initial={{ opacity: 0, y: 150 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
        >
          <GitHubIcon className="github-icon social-icon" />
        </motion.a>
        <motion.a
          className="linkedin"
          href="https://www.linkedin.com/in/gabe-lynch/"
          initial={{ opacity: 0, y: 150 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
        >
          <LinkedInIcon className="linkedin-icon social-icon" />
        </motion.a>
      </div>
    </section>
  );
};
