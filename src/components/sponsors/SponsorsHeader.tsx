import Fade from "react-reveal/Fade";

const SponsorsHeader = (): JSX.Element => {
  return (
    <div className="section-header">
      <Fade top>
        <div className="title">
          <div className="sparkle">
            <img src="/images/Sparkle-2.png" alt="" />
          </div>
          <h1>Become our sponsor</h1>
        </div>
        <div className="text">
          <p>Get exclusive episodes, merch and more</p>
        </div>
      </Fade>
    </div>
  );
};

export default SponsorsHeader;
