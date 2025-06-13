import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { motion } from "framer-motion";

import styles from "./Contact.module.css";

const contactItems = [
  {
    link: "mailto:contact@gabelynch.com",
    icon: EmailIcon
  },
  {
    link: "https://www.linkedin.com/in/gabe-lynch/",
    icon: LinkedInIcon
  },
  {
    link: "https://github.com/Gabe3L",
    icon: GitHubIcon
  }
]

export const Contact = () => {
  return (
    <section className="section" id="contact">
      <div className="container">
        <header className="sectionHeader">
          <h1>Contact</h1>
          <h2>Contact</h2>
        </header>

        <div className="row">
          {contactItems.map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.logoContainer}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <item.icon className={styles.logoImage} />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
