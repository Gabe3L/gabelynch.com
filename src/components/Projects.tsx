import styles from "./Projects.module.css";
import global from "../styles/global.module.css"
import animations from "../styles/animations.module.css";

export const Projects = () => {
  return (
    <section className={global.section}>
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
          <div className={styles.projectContainer}>
            <a
              href="https://github.com/FRCTeam3756/2025-FRCRobot"
              className={styles.project}
              style={{
                backgroundImage:
                  "url(/assets/images/projects/ramferno-2025.webp",
              }}
            >
              <div className={styles.overlay}>
                <h3>RamFerno Robotics Codebase</h3>
                <h4>2025</h4>
              </div>
            </a>
          </div>

          <div className={styles.projectContainer}>
            <a
              href="https://github.com/Gabe3L/gaia"
              className={styles.project}
              style={{
                backgroundImage: "url(/assets/images/projects/gaia.webp",
              }}
            >
              <div className={styles.overlay}>
                <h3>Project GAIA</h3>
                <h4>In Progress</h4>
              </div>
            </a>
          </div>

          <div className={styles.projectContainer}>
            <a
              href="https://github.com/Gabe3L/ClickMaster"
              className={styles.project}
              style={{
                backgroundImage: "url(/assets/images/projects/clickmaster.webp",
              }}
            >
              <div className={styles.overlay}>
                <h3>ClickMaster</h3>
                <h4>2025</h4>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
