const WelcomingHero = (): JSX.Element => {
  return (
    <section id="welcoming-hero">
      <div className="hero-shape1">
        <img src="/images/Welcoming/hero-shape-1.png" alt="" />
      </div>
      <div className="content">
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
        <div className="button">
          <button className="btn">SUBSCRIBE</button>
        </div>
      </div>
      <div className="hero-shape2">
        <img src="/images/Welcoming/hero-shape-2.png" alt="" />
      </div>
    </section>
  );
};

export default WelcomingHero;
