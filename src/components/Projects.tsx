export const Projects = () => {
  return (
    <section id="projects-section" className="section">
      <div className="container">
        <header className="section-header animate-on-scroll">
          <h1>Recent Projects</h1>
          <h2>Recent Projects</h2>
          <p>
            A collection of personal, academic, and team-based projects
            showcasing my knowledge in programming, robotics and design.
          </p>
        </header>
        <div className="row">
          <div className="project-container">
            <a
              href="https://github.com/FRCTeam3756/2025-FRCRobot"
              className="project"
              style={{
                backgroundImage:
                  "url(/assets/images/projects/ramferno-2025.webp",
              }}
            >
              <div className="overlay">
                <h3>RamFerno Robotics Codebase</h3>
                <h4>2025</h4>
              </div>
            </a>
          </div>

          <div className="project-container">
            <a
              href="https://github.com/Gabe3L/gaia"
              className="project"
              style={{
                backgroundImage: "url(/assets/images/projects/gaia.webp",
              }}
            >
              <div className="overlay">
                <h3>Project GAIA</h3>
                <h4>In Progress</h4>
              </div>
            </a>
          </div>

          <div className="project-container">
            <a
              href="https://github.com/Gabe3L/ClickMaster"
              className="project"
              style={{
                backgroundImage:
                  "url(/assets/images/projects/clickmaster.webp",
              }}
            >
              <div className="overlay">
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
