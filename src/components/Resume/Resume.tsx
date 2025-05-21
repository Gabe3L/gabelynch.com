import styles from "./Resume.module.css";
import global from "../../styles/global.module.css";
import animations from "../../styles/animations.module.css";

const resumeItems = [
  {
    date: "Class of 2026",
    position: "High School Diploma",
    location: "Sir Wilfrid Laurier S.S.",
    description:
      "Pursuing a high school diploma with an emphasis on STEM, music, and athletics. Recognized for accomplishments through the High Honours, Unsung Hero and Computer Science Awards.",
  },
  {
    date: "2024",
    position: "Producer's Assistant",
    location: "Bone Vault Inc.",
    description:
      "Developed stylized websites including bonevaultinc.com, implemented Starlink satellite internet for seamless remote filming, and onboarded team to branded email addresses.",
  },
  {
    date: "2023 - Present",
    position: "Lead Programmer",
    location: "FRC Team 3756",
    description:
      "Led groups of students to accomplish tasks such as winning the North Bay District FRC Event, earning the Engineering Inspiration Award in Windsor, and running a summer camp to inspire elementary students to become interested in technology.",
  },
  {
    date: "2024 - Present",
    position: "Program Director",
    location: "CampFerno",
    description:
      "Designed, launched, and led a STEM camp for elementary students. Taught hands-on lessons in robotics, programming, and engineering. Managed finances, coordinated volunteers, and handled all logistics from curriculum to scheduling.",
  },
];

export const Resume = () => {
  return (
    <section className={global.section}>
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
              <p>{item.description}</p>
            </div>
          ))}
        </div>

        <div className={global.row}>
          <div className={`${styles.button} ${animations.animateOnScroll}`}>
            <a href="/resume.pdf" download>
              <p>Download CV</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};