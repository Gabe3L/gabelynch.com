import styles from "./Projects.module.css";
import { ProjectCard } from "../../components/ProjectCard/ProjectCard";

import { FaJava } from "react-icons/fa";
import { SiReact, SiFastapi, SiGradle } from "react-icons/si";

const projectList = [
  {
    id: 0,
    title: "2025 FRC Robot",
    subtitle: "January 2025 - March 2025",
    techStack: [
      { name: "Java", image: FaJava },
      { name: "GradleRIO",  image: SiGradle },
    ],
    github: "https://github.com/FRCTeam3756/2025-FRCRobot",
    image: "ramferno.webp",
    featureOne: "Smooth and responsive control",
    featureTwo: "Custom autonomous routines",
    featureThree: "Hot-Swappable keybinds",
  },
  {
    id: 1,
    title: "SpotiFrame",
    subtitle: "May 2025 - Ongoing",
    techStack: [
      { name: "React", image: SiReact },
      { name: "FastAPI", image: SiFastapi },
    ],
    github: "https://github.com/Gabe3L/SpotiFrame",
    image: "spotiframe.webp",
    featureOne: "Modern UI",
    featureTwo: "Simple authentication",
    featureThree: "Easy playback control",
  },
];

export const Projects = () => {
  return (
    <section className="section" id="projects">
      <div className="container">
        <header className="sectionHeader">
          <h1>Projects</h1>
          <h2>Projects</h2>
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
