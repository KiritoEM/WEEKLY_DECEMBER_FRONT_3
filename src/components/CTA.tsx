const CTA = (): JSX.Element => {
  return (
    <section id="CTA">
      <div className="shape-1">
        <div className="img">
          <img src="/images/CTA/img-1.png" alt="" />
        </div>
      </div>
      <div className="content">
        <div className="section-header">
          <div className="beta">
            <p>BETA</p>
          </div>
          <div className="title">
            <h1>Available now Pod of Cast App</h1>
          </div>
          <div className="text">
            <p>We just launched our podcast app!</p>
          </div>
        </div>
        <div className="section-download">
          <div className="buttons">
            <div className="button">
              <button className="btn">DOWNLOAD NOW</button>
            </div>
            <div className="shape">
              <img src="/images/Sparkle.png" alt="" />
            </div>
          </div>
          <div className="social">
            <p>Content also available on:</p>
            <img src="/images/CTA/platform.png" alt="" />
          </div>
        </div>
      </div>
      <div className="shape-2">
        <div className="img">
          <img src="/images/CTA/img-2.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default CTA;
