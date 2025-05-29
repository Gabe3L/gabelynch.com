import globalStyles from "../../styles/global.module.css";
import styles from "./Projects.module.css";
import animations from "../../styles/animations.module.css";
import { ProjectCard } from "./ProjectCard";

const projectList = [
  {
    id: 0,
    title: "RamFerno FRC Robot Code",
    subtitle: "January 2025 - March 2025",
    techStack: ["Java", "WPILib"],
    github: "https://github.com/FRCTeam3756/2025-FRCRobot",
    image: "ramferno-2025.webp",
  },
  {
    id: 1,
    title: "Project GAIA",
    subtitle: "February 2025 - Ongoing",
    techStack: ["Python", "PyTorch", "TypeScript"],
    github: "https://github.com/Gabe3L/gaia",
    image: "gaia.webp",
  },
  {
    id: 2,
    title: "ClickMaster",
    subtitle: "February 2025 - March 2025",
    techStack: ["Java", "JavaFX", "AWT"],
    github: "https://github.com/Gabe3L/ClickMaster",
    image: "clickmaster.webp",
  },
];

export const Projects = () => {
  return (
    <section className={globalStyles.section} id="projects">
      <div className={globalStyles.container}>
        <header
          className={`${globalStyles.sectionHeader} ${animations.animateOnScroll}`}
        >
          <h1>Recent Projects</h1>
          <h2>Recent Projects</h2>
        </header>

        <div className={styles.projectsContent}>
          {projectList.map((item) => {
            return <ProjectCard key={item.id} item={item} />;
          })}
        </div>
      </div>
    </section>
  );
};
