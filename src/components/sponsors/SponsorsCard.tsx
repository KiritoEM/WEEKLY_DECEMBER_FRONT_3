const SponsorsCard = (): JSX.Element => {
  return (
    <div className="sponsors-card">
      <div className="price">
        <div className="header">
          <h3>Member</h3>
          <p>
            Lorem ipsum dolor sit amet consectet cing elit, sed do eiusmod
            tempor.
          </p>
        </div>
        <div className="button-price">
          <div className="button">
            <button className="btn">SUBSCRIBE</button>
          </div>
          <div className="price-value">
            <h5>
              $9.99
              <br />
              <span>/month</span>
            </h5>
          </div>
        </div>
      </div>
      <div className="benefits"></div>
    </div>
  );
};

export default SponsorsCard;
