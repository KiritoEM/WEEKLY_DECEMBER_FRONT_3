import Flip from "react-reveal/Flip";

const EpisodesHeader = (): JSX.Element => {
  return (
    <Flip bottom>
      <div className="section-header">
        <div className="title">
          <h1>Recent Episodes</h1>
        </div>
        <div className="text">
          <p>Available on your favorite platform</p>
        </div>
      </div>
    </Flip>
  );
};

export default EpisodesHeader;
