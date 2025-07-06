import { motion } from "framer-motion";
import styles from "./ProjectCard.module.css";
import type { IconType } from "react-icons";
import { TechItem } from "../TechItem/TechItem";

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

interface TechItem {
  name: string;
  image: IconType;
}

interface Project {
  item: {
    title: string;
    subtitle: string;
    techStack: TechItem[];
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
        className={styles.projectCard}
        initial={{ opacity: 0, y: 75 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
      >
        <div className={styles.projectHeader}>
          <div className={styles.projectTitle}>
            <h1>{item.title}</h1>
            <p>{item.subtitle}</p>
          </div>
        </div>
        <div className={styles.projectDivider}></div>
        <div className={styles.projectBody}>
          <div className={styles.projectFeatures}>
            <p>| {item.featureOne}</p>
            <p>| {item.featureTwo}</p>
            <p>| {item.featureThree}</p>
          </div>
          <div className={styles.projectTech}>
            <div className={styles.techList}>
              {item.techStack.map((tech) => {
                return (
                  <TechItem
                    key={tech.name}
                    image={tech.image}
                    text={tech.name}
                  />
                );
              })}
            </div>
          </div>
        </div>
        <div className={styles.projectImage}>
          <img src={imageUrl} alt={item.title} />
        </div>
      </motion.div>
    </a>
  );
};
