import styles from "./Resume.module.css";
import global from "../../styles/global.module.css";
import animations from "../../styles/animations.module.css";

const resumeItems = [
  {
    date: "2026 (Expected)",
    position: "High School Diploma",
    location: "Sir Wilfrid Laurier S.S.",
    description:
      "Pursuing a diploma with an focus on STEM, music, and athletics. Recognized through the High Honours, Unsung Hero and Computer Science Awards for academic excellence and leadership.",
  },
  {
    date: "2024",
    position: "Producer's Assistant",
    location: "Bone Vault Inc.",
    description:
      "Developed stylized websites including bonevaultinc.com. Installed Starlink satellite internet for remote production and migrated team communications to a branded email system.",
  },
  {
    date: "2023 - Present",
    position: "Lead Programmer",
    location: "FRC Team 3756",
    description:
      "Directed software development for competition robots. Led team to victory at the North Bay District FRC Event and earned the University of Windsor Engineering Inspiration Award. Secured over $60,000 in sponsorships via outreach initiatives and presentations.",
  },
  {
    date: "2024 - Present",
    position: "Program Director",
    location: "CampFerno",
    description:
      "Designed, launched, and directed a STEM camp for elementary students. Taught hands-on lessons in robot design, programming, and engineering. Managed finances, coordinated volunteer efforts, and oversaw all logistics.",
  },
];

export const Resume = () => {
  return (
    <section className={global.section} id="resume">
      <div className={global.container}>
        <header
          className={`${global.sectionHeader} ${animations.animateOnScroll}`}
        >
          <h1>Resume</h1>
          <h2>Resume</h2>
        </header>

        <div className={styles.resumeGrid}>
          {resumeItems.map((item, index) => (
            <div
              key={index}
              className={`${styles.resumeBox} ${animations.animateOnScroll}`}
            >
              <span className={styles.date}>{item.date}</span>
              <span className={styles.position}>{item.position}</span>
              <span className={styles.location}>{item.location}</span>
              <span className={styles.description}>{item.description}</span>
            </div>
          ))}
        </div>

        <div className={global.row}>
          <div className={`${styles.button} ${animations.animateOnScroll}`}>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" download>
              <p>Download CV</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};