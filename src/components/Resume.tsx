import styles from "./Resume.module.css";
import global from "../styles/global.module.css"
import animations from "../styles/animations.module.css";

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
          <div className={`${styles.resumeBox} ${animations.animateOnScroll}`}>
            <span className={styles.date}>Class of 2026</span>
            <span className={styles.position}>High School Diploma</span>
            <span className={styles.location}>Sir Wilfrid Laurier S.S.</span>
            <p>
              Pursuing a high school diploma with an emphasis on STEM, music,
              and athletics. Recognized for accomplishments through the High
              Honours, Unsung Hero and Computer Science Awards.
            </p>
          </div>
          <div className={`${styles.resumeBox} ${animations.animateOnScroll}`}>
            <span className={styles.date}>2024</span>
            <span className={styles.position}>Producer's Assistant</span>
            <span className={styles.location}>Bone Vault Inc.</span>
            <p>
              Developed stylized websites including bonevaultinc.com,
              implemented Starlink satellite internet for seamless remote
              filming, and onboarded team to branded email addresses.
            </p>
          </div>
          <div className={`${styles.resumeBox} ${animations.animateOnScroll}`}>
            <span className={styles.date}>2023 - Present</span>
            <span className={styles.position}>Lead Programmer</span>
            <span className={styles.location}>FRC Team 3756</span>
            <p>
              Lead groups of students to accomplish tasks such as winning the
              North Bay District FRC Event, earning the Engineering Inspiration
              Award in Windsor and running a summer camp to inspire elementary
              students to become interested in technology.
            </p>
          </div>
          <div className={`${styles.resumeBox} ${animations.animateOnScroll}`}>
            <span className={styles.date}>2024 - Present</span>
            <span className={styles.position}>Program Director</span>
            <span className={styles.location}>CampFerno</span>
            <p>
              Designed, launched, and led a STEM camp for elementary students.
              Taught hands-on lessons in robotics, programming, and engineering.
              Managed finances, coordinated volunteers, and managed all
              logistics from curriculum to scheduling.
            </p>
          </div>
        </div>
        <div className={global.row}>
          <div className={`${styles.button} ${animations.animateOnScroll}`}>
            <a href="/assets/documents/resume.pdf" download>
              <p>Download CV</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
