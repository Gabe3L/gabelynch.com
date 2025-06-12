import { motion } from "framer-motion";
import styles from "./ProjectCard.module.css";

const projectIcons = import.meta.glob("../../assets/projects/*.webp", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const getIconByName = (filename: string): string => {
  return (
    Object.entries(projectIcons).find(([path]) =>
      path.endsWith(filename)
    )?.[1] ?? ""
  );
};

interface Project {
  item: {
    title: string;
    subtitle: string;
    techStack: string[];
    github: string;
    image: string;
    featureOne: string;
    featureTwo: string;
    featureThree: string;
  };
}

export const ProjectCard = ({ item }: Project) => {
  const imageUrl = getIconByName(item.image);

  return (
    <a href={item.github} target="_blank" rel="noopener noreferrer">
      <motion.div
        className={styles.projectItem}
        initial={{ opacity: 0, y: 75 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <div className={styles.projectDetails}>
          <div className={styles.projectImage}>
            <img src={imageUrl} alt={item.title} />
          </div>
          <div className={styles.projectText}>
            <h3>{item.title}</h3>
            <p>{item.subtitle}</p>
          </div>
        </div>
        <div className={styles.features}>
          <h4>Key Features:</h4>
          <ul>
            <li>{item.featureOne}</li>
            <li>{item.featureTwo}</li>
            <li>{item.featureThree}</li>
          </ul>
        </div>
        <div className={styles.techStackContainer}>
          {item.techStack.map((tech) => {
            return (
              <p key={tech} className={styles.techItem}>
                {tech}
              </p>
            );
          })}
        </div>
      </motion.div>
    </a>
  );
};
