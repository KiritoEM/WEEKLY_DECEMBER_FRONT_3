const AboutQuote = (): JSX.Element => {
  return (
    <div className="quote">
      <div className="quote__container">
        <div className="shape-1">
          <img src="/images/About/shape-1.png" alt="" />
        </div>
        <div className="content">
          <div className="quote-item">
            <div>
              <img src="/images/About/“.png" alt="" />
            </div>
          </div>
          <div className="text">
            <h3>
              One of the best daily podcasts that covers every topic on Spotify.
            </h3>
          </div>
          <div className="author">
            <div className="author__profile">
              <p>
                <img src="/images/About/avatar.png" alt="" />
                Johan Smith,{" "}
              </p>
            </div>
            <div className="author__job">
              <p>
                <img src="/images/About/spotify.png" alt="" />
                Social Community Manager
              </p>
            </div>
          </div>
        </div>
        <div className="shape-2">
          <img src="/images/About/shape-2.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default AboutQuote;
