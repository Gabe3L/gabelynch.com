import { motion } from "framer-motion";
import styles from "./ProjectCard.module.css";
import type { IconType } from "react-icons";

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
        className={styles.cardContainer}
        initial={{ opacity: 0, y: 75 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <div className={styles.cardHeader}>
          <div className={styles.cardImageContainer}>
            <img src={imageUrl} alt={item.title} />
          </div>
          <div className={styles.textContent}>
            <h1>{item.title}</h1>
            <p>{item.subtitle}</p>
          </div>
        </div>
        <div className={styles.cardFeatures}>
          <h4>Key Features:</h4>
          <ul>
            <li>{item.featureOne}</li>
            <li>{item.featureTwo}</li>
            <li>{item.featureThree}</li>
          </ul>
        </div>
        <div className={styles.cardTechStack}>
          {item.techStack.map((tech) => {
            return (
              <p key={tech.name} className={styles.techItem}>
                <tech.image className={styles.techIcon}/>
                {tech.name}
              </p>
            );
          })}
        </div>
      </motion.div>
    </a>
  );
};
