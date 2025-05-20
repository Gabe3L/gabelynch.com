export const About = () => {
  return (
    <section id="about-me-section" className="section">
      <div className="container">
        <div className="row">
          <div className="about-me-text animate-on-scroll">
            <h1>About Me</h1>
            <p>
              Hi, my name is Gabe Lynch! I'm a passionate and driven student
              with a deep interest in technology, music, and sports. I
              specialize in
              <strong>Machine Learning</strong>, <strong>Robotics</strong> and
              <strong>Computer Vision</strong>, and I'm constantly expanding my
              knowledge. My programming skills include <strong>Python</strong>,
              <strong>Java</strong> and <strong>Web Development</strong> and I'm
              currently learning technologies like <strong>C++</strong>,
              <strong>JavaScript</strong> and <strong>Flutter</strong>. Outside
              of tech, I am a <strong>dedicated musician</strong>, competitive
              <strong>volleyball player</strong> and I am fluent in both
              <strong>English</strong> and <strong>French</strong>.
            </p>
          </div>
          <div
            className="about-me-img animate-on-scroll"
            style={{
              backgroundImage:
                "url(/assets/images/profile/about-me.webp)",
            }}
          ></div>
        </div>
      </div>
    </section>
  );
};
