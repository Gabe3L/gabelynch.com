import { motion } from "framer-motion";
import styles from "./Projects.module.css";

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
        <div className={styles.projectImage}>
          <img src={imageUrl} alt={item.title} />
        </div>
        <div className={styles.projectDetails}>
          <div className={styles.projectTitle}>
            <h3>{item.title}</h3>
            <p>{item.subtitle}</p>
          </div>
          <div className={styles.projectStacks}>
            <div className={styles.stacks}>
              {item.techStack.map((tech) => {
                return (
                  <p key={tech} className={styles.techStack}>
                    {tech}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </motion.div>
    </a>
  );
};
