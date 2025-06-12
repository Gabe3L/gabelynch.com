import globalStyles from "../../styles/global.module.css";
import styles from "./Projects.module.css";
import animations from "../../styles/animations.module.css";
import { ProjectCard } from "./ProjectCard";

const projectList = [
  {
    id: 0,
    title: "2025 FRC Robot",
    subtitle: "January 2025 - March 2025",
    techStack: ["Java", "WPILib"],
    github: "https://github.com/FRCTeam3756/2025-FRCRobot",
    image: "ramferno.webp",
    featureOne: "Smooth and responsive swerve drive control",
    featureTwo: "Customizable autonomous routines",
    featureThree: "Hot-Swappable keybinds for quick adjustments",
  },
  {
    id: 1,
    title: "Project GAIA",
    subtitle: "February 2025 - Ongoing",
    techStack: ["Python", "PyTorch", "TypeScript"],
    github: "https://github.com/Gabe3L/gaia",
    image: "gaia.webp",
    featureOne: "Touch-free Windows navigation",
    featureTwo: "Realistic and responsive voice engine",
    featureThree: "Simple and intuitive user interface",
  },
  {
    id: 2,
    title: "SpotiFrame",
    subtitle: "May 2025 - Ongoing",
    techStack: ["React", "TypeScript", "FastAPI"],
    github: "https://github.com/Gabe3L/SpotiFrame",
    image: "spotiframe.webp",
    featureOne: "Clean and modern UI",
    featureTwo: "Simple authentication with Spotify",
    featureThree: "Control Spotify playback without leaving your app",
  },
];

export const Projects = () => {
  return (
    <section className={globalStyles.section} id="projects">
      <div className={globalStyles.container}>
        <header
          className={`${globalStyles.sectionHeader} ${animations.animateOnScroll}`}
        >
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
