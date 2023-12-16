const FeaturesCard = (): JSX.Element => {
  return (
    <div className="features-card">
      <div className="features-card__img">
        <img src="/images/features/icon-1.png" alt="" />
      </div>
      <div className="features-card__content">
        <h5>Topic by Request</h5>
        <p className="mt-2">
          Lorem ipsum dolor sit amet consectet pis cing elit, sed do eiusmod
          tempor.
        </p>
      </div>
    </div>
  );
};

export default FeaturesCard;
