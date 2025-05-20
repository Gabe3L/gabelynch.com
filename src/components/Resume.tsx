export const Resume = () => {
  return (
    <section id="resume-section" className="section">
      <div className="container">
        <header className="section-header animate-on-scroll">
          <h1>Resume</h1>
          <h2>Resume</h2>
        </header>
        <div className="resume-grid">
          <div className="resume-box animate-on-scroll">
            <span className="date">Class of 2026</span>
            <span className="position">High School Diploma</span>
            <span className="location">Sir Wilfrid Laurier S.S.</span>
            <p>
              Pursuing a high school diploma with an emphasis on STEM, music,
              and athletics. Recognized for accomplishments through the High
              Honours, Unsung Hero and Computer Science Awards.
            </p>
          </div>
          <div className="resume-box animate-on-scroll">
            <span className="date">2024</span>
            <span className="position">Producer's Assistant</span>
            <span className="location">Bone Vault Inc.</span>
            <p>
              Developed stylized websites including bonevaultinc.com,
              implemented Starlink satellite internet for seamless remote
              filming, and onboarded team to branded email addresses.
            </p>
          </div>
          <div className="resume-box animate-on-scroll">
            <span className="date">2023 - Present</span>
            <span className="position">Lead Programmer</span>
            <span className="location">FRC Team 3756</span>
            <p>
              Lead groups of students to accomplish tasks such as winning the
              North Bay District FRC Event, earning the Engineering Inspiration
              Award in Windsor and running a summer camp to inspire elementary
              students to become interested in technology.
            </p>
          </div>
          <div className="resume-box animate-on-scroll">
            <span className="date">2024 - Present</span>
            <span className="position">Program Director</span>
            <span className="location">CampFerno</span>
            <p>
              Designed, launched, and led a STEM camp for elementary students.
              Taught hands-on lessons in robotics, programming, and engineering.
              Managed finances, coordinated volunteers, and managed all
              logistics from curriculum to scheduling.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="button animate-on-scroll">
            <a href="/assets/documents/resume.pdf" download>
              <p>Download CV</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
