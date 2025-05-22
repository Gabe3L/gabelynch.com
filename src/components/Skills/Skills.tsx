import styles from "./Skills.module.css";
import global from "../../styles/global.module.css";
import animations from "../../styles/animations.module.css";
import { SkillCard } from "./SkillCard";
import { motion } from "framer-motion";

export const Skills = () => {
  const techList = [
    { 
      id: 1,
      name: "python", 
      type: "Programming Language"
    },
    { 
      id: 2,
      name: "java" ,
      type: "Programming Language"
    },
    { 
      id: 3,
      name: "cpp",
      type: "Programming Language"
    },
    { 
      id: 4,
      name: "javascript",
      type: "Programming Language"
    },
    { 
      id: 5,
      name: "typescript",
      type: "Programming Language"
    },
    { 
      id: 6,
      name: "html",
      type: "Programming Language"
    },
    { 
      id: 7,
      name: "css",
      type: "Programming Language"
    },
    { 
      id: 8,
      name: "electronjs",
      type: "Programming Language" 
    },
    { 
      id: 9,
      name: "git",
      type: "Programming Language" 
    },
    { 
      id: 10,
      name: "pytorch",
      type: "Programming Language" 
    },
    { 
      id: 11,
      name: "tensorflow",
      type: "Programming Language" 
    },
    { 
      id: 12,
      name: "react",
      type: "Programming Language" 
    },
    { 
      id: 13,
      name: "django",
      type: "Programming Language" 
    },
    { 
      id: 14,
      name: "nginx",
      type: "Programming Language" 
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
