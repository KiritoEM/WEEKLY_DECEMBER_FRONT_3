import Fade from "react-reveal/Fade";

const WelcomingHero = (): JSX.Element => {
  return (
    <section id="welcoming-hero">
      <Fade left>
        <div className="hero-shape1">
          <img src="/images/Welcoming/hero-shape-1.png" alt="" />
        </div>
      </Fade>
      <div className="content">
        <Fade top>
          <div className="title">
            <h1>
              Your Daily
              <br />
              <span>Podcast</span>
            </h1>
          </div>
          <div className="text">
            <p>We cover all kinds of categories and a weekly special guest.</p>
          </div>
        </Fade>
        <Fade bottom>
          <div className="button">
            <button className="btn">SUBSCRIBE</button>
          </div>
        </Fade>
      </div>
      <Fade right>
        <div className="hero-shape2">
          <img src="/images/Welcoming/hero-shape-2.png" alt="" />
        </div>
      </Fade>
    </section>
  );
};

export default WelcomingHero;
