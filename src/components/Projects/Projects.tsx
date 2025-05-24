import styles from "./Projects.module.css";
import global from "../../styles/global.module.css";
import animations from "../../styles/animations.module.css";

const projectIcons = import.meta.glob("../../assets/projects/*.webp", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const getIconByName = (filename: string): string => {
  const entry = Object.entries(projectIcons).find(([path]) =>
    path.endsWith(`/${filename}.webp`)
  );
  return entry?.[1] ?? "";
};

const projectList = [
  {
    title: "RamFerno Robotics Codebase",
    subtitle: "2025",
    href: "https://github.com/FRCTeam3756/2025-FRCRobot",
    image: "ramferno-2025",
  },
  {
    title: "Project GAIA",
    subtitle: "In Progress",
    href: "https://github.com/Gabe3L/gaia",
    image: "gaia",
  },
  {
    title: "ClickMaster",
    subtitle: "2025",
    href: "https://github.com/Gabe3L/ClickMaster",
    image: "clickmaster",
  },
];

export const Projects = () => {
  return (
    <section className={global.section} id="projects">
      <div className={global.container}>
        <header
          className={`${global.sectionHeader} ${animations.animateOnScroll}`}
        >
          <h1>Recent Projects</h1>
          <h2>Recent Projects</h2>
          <p>
            A collection of personal, academic, and team-based projects
            showcasing my knowledge in programming, robotics and design.
          </p>
        </header>

        <div className={global.row}>
          {projectList.map((project) => (
            <div className={styles.projectContainer} key={project.title}>
              <a
                href={project.href}
                className={styles.project}
                style={{
                  backgroundImage: `url(${getIconByName(project.image)})`,
                }}
              >
                <div className={styles.overlay}>
                  <h3>{project.title}</h3>
                  <h4>{project.subtitle}</h4>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};