import styles from "./Skills.module.css";
import global from "../../styles/global.module.css";
import animations from "../../styles/animations.module.css";
import { SkillCard } from "./SkillCard";
import { motion } from "framer-motion";

export const Skills = () => {
  const techList = [
    { 
      id: 1,
      name: "Python", 
      file: "python.svg",
      type: "Programming Language"
    },
    { 
      id: 2,
      name: "Java",
      file: "java.svg",
      type: "Programming Language"
    },
    { 
      id: 3,
      name: "C++",
      file: "cpp.svg",
      type: "Programming Language"
    },
    { 
      id: 4,
      name: "JavaScript",
      file: "javascript.svg",
      type: "Programming Language"
    },
    { 
      id: 5,
      name: "TypeScript",
      file: "typescript.svg",
      type: "Programming Language"
    },
    { 
      id: 6,
      name: "HTML",
      file: "html.svg",
      type: "Markup Language"
    },
    { 
      id: 7,
      name: "CSS",
      file: "css.svg",
      type: "Style Sheet Language"
    },
    { 
      id: 8,
      name: "ReactJS",
      file: "reactjs.svg",
      type: "JavaScript Framework" 
    },
    { 
      id: 9,
      name: "ElectronJS",
      file: "electronjs.svg",
      type: "JavaScript Framework" 
    },
    { 
      id: 10,
      name: "Git",
      file: "git.svg",
      type: "Version Control Tool" 
    },
    { 
      id: 11,
      name: "PyTorch",
      file: "pytorch.svg",
      type: "Machine Learning Library" 
    },
    { 
      id: 12,
      name: "TensorFlow",
      file: "tensorflow.svg",
      type: "Machine Learning Library" 
    },
    { 
      id: 13,
      name: "Django",
      file: "django.svg",
      type: "Backend Framework" 
    },
    { 
      id: 14,
      name: "Nginx",
      file: "nginx.svg",
      type: "Web Server" 
    },
  ];

  return (
    <section className={global.section}>
      <div className={global.container}>
        <header
          className={`${global.sectionHeader} ${animations.animateOnScroll}`}
        >
          <h1>Skills</h1>
          <h2>Skills</h2>
        </header>

        <motion.div
          className={styles.skillsContentItems}
          initial={{ opacity: 0, y: 75 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          {techList?.map((skill) => {
            return <SkillCard item={skill} key={skill.id}/>;
          })}
        </motion.div>
      </div>
    </section>
  );
};
