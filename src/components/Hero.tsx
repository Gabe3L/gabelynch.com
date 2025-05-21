import styles from "./Hero.module.css";
import global from "../styles/global.module.css"
import animations from "../styles/animations.module.css";

export const Hero = () => {
  return (
    <section className={global.section}>
      <div className={global.container}>
        <div className={`${styles.imageCol} ${animations.animateOnScroll}`}>
          <img
            src="/assets/images/profile/headshot.webp"
            alt="Portrait of Gabe Lynch"
            className={styles.profileImg}
          ></img>
        </div>
        <div className={`${styles.textCol} ${animations.animateOnScroll}`}>
          <h1>
            Hello! <span>I'm</span>
          </h1>
          <h2>Gabe Lynch</h2>
          <h3>A software developer and student from London, ON, Canada.</h3>
        </div>
      </div>
    </section>
  );
};
