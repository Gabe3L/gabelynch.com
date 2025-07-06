import styles from "./Hero.module.css";

import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import { motion } from "framer-motion";

export const Hero = () => {
  const fadeUp = {
    initial: { y: 20 },
    animate: { y: 0 },
    transition: { duration: 0.6, ease: "easeOut" as const },
  };

  const links = [
    {
      href: "mailto:contact@gabelynch.com",
      className: "gmail",
      icon: <EmailIcon className="gmail-icon social-icon" />,
    },
    {
      href: "https://github.com/Gabe3L",
      className: "github",
      icon: <GitHubIcon className="github-icon social-icon" />,
    },
    {
      href: "https://www.linkedin.com/in/gabe-lynch/",
      className: "linkedin",
      icon: <LinkedInIcon className="linkedin-icon social-icon" />,
    },
  ];

  return (
    <section className={styles.hero} id="home">
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
        {links.map(({ href, className, icon }, index) => (
          <motion.a
            key={index}
            className={className}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, transition: { duration: 0.1 } }}
            whileTap={{ scale: 0.9, transition: { duration: 0.1 } }}
          >
            {icon}
          </motion.a>
        ))}
      </div>
    </section>
  );
};
