const EpisodesCard = (): JSX.Element => {
  return (
    <div className="episodes-card">
      <div className="cover">
        <img src="/images/episodes/episode-1.png" alt="" />
      </div>
      <div className="header">
        <div className="title">
          <h6>Eps. 6</h6>
          <h5>Pandemic Becoming Endemic</h5>
        </div>
        <div className="line"></div>
        <div className="text">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            ac ultrices odio.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default EpisodesCard;
