import styles from "./About.module.css";
import global from "../../styles/global.module.css";
import animations from "../../styles/animations.module.css";
import aboutMeImage from "../../assets/profile/about-me.webp";

import { motion } from "framer-motion";

export const About = () => {
  return (
    <section className={global.section} id="about-me">
      <div className={global.container}>
        <div className={global.row}>
          <motion.div
            className={`${styles.aboutMeContainer} ${animations.animateOnScroll}`}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ scale: 1.005 }}
          >
            <div className={styles.aboutMeImage}>
              <img src={aboutMeImage} alt="Gabe Lynch" />
            </div>
            <div className={styles.aboutMeText}>
              <h1>About Me</h1>
              <p>
                Hi, my name is Gabe Lynch! I'm a passionate and driven student{" "}
                with a deep interest in technology, music, and sports. I{" "}
                specialize in <strong>Machine Learning</strong>,{" "}
                <strong>Robotics</strong> and <strong>Web Design</strong>, and{" "}
                I'm constantly expanding my knowledge. My programming skills{" "}
                include <strong>Python</strong>, <strong>Java</strong> and{" "}
                <strong>Web Development</strong> and I'm currently learning{" "}
                technologies like <strong>C++</strong>,{" "}
                <strong>React Native</strong> and <strong>ROS 2</strong>.{" "}
                Outside of tech, I am a <strong>dedicated musician</strong>,{" "}
                competitive <strong>volleyball player</strong> and I am fluent{" "}
                in both <strong>English</strong> and <strong>French</strong>.{" "}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
