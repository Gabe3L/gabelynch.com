import styles from "./Technologies.module.css";
import global from "../styles/global.module.css"
import animations from "../styles/animations.module.css";

export const Technologies = () => {
  const techList = [
    { src: "python", alt: "Python" },
    { src: "java", alt: "Java" },
    { src: "cpp", alt: "C++" },
    { src: "javascript", alt: "JavaScript" },
    { src: "typescript", alt: "TypeScript" },
    { src: "html", alt: "HTML" },
    { src: "css", alt: "CSS" },
    { src: "electronjs", alt: "ElectronJS" },
    { src: "git", alt: "Git" },
    { src: "pytorch", alt: "PyTorch" },
    { src: "tensorflow", alt: "TensorFlow" },
    { src: "react", alt: "ReactJS" },
    { src: "django", alt: "Django" },
    { src: "nginx", alt: "Nginx" },
  ];

  return (
    <section className={global.section}>
      <div className={global.container}>
        <header
          className={`${global.sectionHeader} ${animations.animateOnScroll}`}
        >
          <h1>Technologies</h1>
          <h2>Technologies</h2>
        </header>

        <div className={global.row}>
          {techList.map((tech) => (
            <div className={styles.techBox} key={tech.alt}>
              <img
                src={`/assets/images/technologies/${tech.src}.svg`}
                alt={tech.alt}
                className={styles.techLogo}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
