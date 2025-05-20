export const Hero = () => {
  return (
    <section id="home-section" className="section">
      <div className="container">
        <div className="image-col animate-on-scroll">
          <img
            src="/assets/images/profile/headshot.webp"
            alt="Portrait of Gabe Lynch"
            className="profile-img"
          ></img>
        </div>
        <div className="text-col animate-on-scroll">
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
