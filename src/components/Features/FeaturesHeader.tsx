import Fade from "react-reveal/Fade";

const FeaturesHeader = (): JSX.Element => {
  return (
    <Fade bottom>
    <div className="section-header">
      <div className="title">
        <h1>Membership benefits</h1>
        <div className="sparkle">
          <img src="/images/scribble.png" alt="" />
        </div>
      </div>
      <div className="text">
        <p>Become our sponsor and get all benefits</p>
      </div>
    </div>
    </Fade>
  );
};

export default FeaturesHeader;
