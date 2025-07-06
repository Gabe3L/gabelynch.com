import styles from "./About.module.css";
import aboutMeImage from "../../assets/profile/about-me.webp";

import { motion } from "framer-motion";

import {
  SiPython,
  SiCplusplus,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiReact,
  SiElectron,
  SiPytorch,
  SiTensorflow,
  SiDjango,
} from "react-icons/si";

import { FaJava } from "react-icons/fa"
import { TechItem } from "../../components/TechItem/TechItem";

const techList = [
  {
    id: 1,
    name: "Python",
    Icon: SiPython,
    type: "Language",
  },
  {
    id: 2,
    name: "Java",
    Icon: FaJava,
    type: "Language"
  },
  {
    id: 3,
    name: "C++",
    Icon: SiCplusplus,
    type: "Language",
  },
  {
    id: 4,
    name: "JavaScript",
    Icon: SiJavascript,
    type: "Language",
  },
  {
    id: 5,
    name: "TypeScript",
    Icon: SiTypescript,
    type: "Language",
  },
  {
    id: 6,
    name: "HTML",
    Icon: SiHtml5,
    type: "Language",
  },
  {
    id: 7,
    name: "CSS",
    Icon: SiCss3,
    type: "Language",
  },
  {
    id: 8,
    name: "ReactJS",
    Icon: SiReact,
    type: "Framework",
  },
  {
    id: 9,
    name: "ElectronJS",
    Icon: SiElectron,
    type: "Framework",
  },
  {
    id: 10,
    name: "PyTorch",
    Icon: SiPytorch,
    type: "Library",
  },
  {
    id: 11,
    name: "TensorFlow",
    Icon: SiTensorflow,
    type: "Library",
  },
  {
    id: 12,
    name: "Django",
    Icon: SiDjango,
    type: "Framework",
  },
];

export const About = () => {
  return (
    <section className="section" id="about-me">
      <div className="container">
        <div className="row">
          <motion.div
            className={styles.aboutMeContainer}
            initial={{ opacity: 0, y: 75 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className={styles.aboutMeImage}>
              <img src={aboutMeImage} alt="Gabe Lynch" />
            </div>
            <div className={styles.aboutMeText}>
              <h1>About Me</h1>
              <p>
                Hi, my name is Gabe Lynch! I'm a passionate and driven student{" "}
                with a deep interest in technology, music, and sports. I{"  "}
                specialize in <strong>Machine Learning</strong>,{" "}
                <strong>Robotics</strong> and <strong>Web Design</strong>, and
                {"  "}
                I'm constantly expanding my knowledge. My programming skills{" "}
                include <strong>Python</strong>, <strong>Java</strong> and{" "}
                <strong>React</strong> and I'm currently learning technologies
                like <strong>C++</strong>, <strong>React Native</strong> and{" "}
                <strong>ROS 2</strong>. Outside of tech, I am a{" "}
                <strong>dedicated musician</strong>, competitive{" "}
                <strong>volleyball player</strong> and{" "}
                <strong>bilingual</strong> student.
              </p>
              
              <div className={styles.contentDivider}></div>

              <h4>Tech Stack:</h4>
              <div className={styles.techItems}>
                {techList.map((tech, index) => (
                  <motion.div
                    key={tech.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true, amount: 0.4 }}
                  >
                    <TechItem
                      key={tech.name}
                      image={tech.Icon}
                      text={tech.name}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
