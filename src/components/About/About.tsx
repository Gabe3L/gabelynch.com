import styles from "./About.module.css";
import global from "../../styles/global.module.css";
import animations from "../../styles/animations.module.css";
import aboutMeImage from "../../assets/profile/about-me.webp";

export const About = () => {
  return (
    <section className={global.section} id="about-me">
      <div className={global.container}>
        <div className={global.row}>
          <div
            className={`${styles.aboutMeImg} ${animations.animateOnScroll}`}
            style={{
              backgroundImage: `url(${aboutMeImage})`,
            }}
          ></div>
          <div
            className={`${styles.aboutMeText} ${animations.animateOnScroll}`}
          >
            <h1>About Me</h1>
            <p>
              Hi, my name is Gabe Lynch! I'm a passionate and driven student{" "}
              with a deep interest in technology, music, and sports. I{" "}
              specialize in <strong>Machine Learning</strong>,{" "}
              <strong>Robotics</strong> and <strong>Computer Vision</strong>,
              and I'm constantly expanding my knowledge. My programming skills
              include <strong>Python</strong>, <strong>Java</strong> and{" "}
              <strong>Web Development</strong> and I'm currently learning
              technologies like <strong>C++</strong>,{" "}
              <strong>JavaScript</strong> and <strong>Flutter</strong>. Outside{" "}
              of tech, I am a <strong>dedicated musician</strong>, competitive{" "}
              <strong>volleyball player</strong> and I am fluent in both{" "}
              <strong>English</strong> and <strong>French</strong>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
