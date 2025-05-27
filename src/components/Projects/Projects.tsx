import globalStyles from "../../styles/global.module.css";
import styles from "./Projects.module.css";
import animations from "../../styles/animations.module.css";
import { ProjectCard } from "./ProjectCard";

const projectList = [
  {
    id: 0,
    title: "RamFerno Robotics Codebase",
    subtitle: "2025",
    techStack: ["Java", "WPILib"],
    github: "https://github.com/FRCTeam3756/2025-FRCRobot",
    image: "ramferno-2025.webp",
  },
  {
    id: 1,
    title: "Project GAIA",
    subtitle: "In Progress",
    techStack: ["Python", "PyTorch", "TypeScript"],
    github: "https://github.com/Gabe3L/gaia",
    image: "gaia.webp",
  },
  {
    id: 2,
    title: "ClickMaster",
    subtitle: "2025",
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
          <p>
            A collection of personal, academic, and team-based projects
            showcasing my knowledge in programming, robotics and design.
          </p>
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
