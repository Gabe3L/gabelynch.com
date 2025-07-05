import styles from "./Skills.module.css";
import { SkillCard } from "../../components/SkillCard/SkillCard";
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

export const Skills = () => {
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

  return (
    <section className="section" id="skills">
      <div className="container">
        <header className="sectionHeader">
          <h1>Skills</h1>
          <h2>Skills</h2>
        </header>

        <div className={styles.skillsContainer}>
          {techList.map((skill, index) => (
            <motion.div
              key={skill.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.4 }}
            >
              <SkillCard item={skill} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
