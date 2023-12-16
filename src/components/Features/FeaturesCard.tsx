interface IfeaturesCard {
  img: string;
  title: string;
}

const FeaturesCard: React.FC<IfeaturesCard> = ({ img, title }): JSX.Element => {
  return (
    <div className="features-card">
      <div className="features-card__img">
        <img src={img} alt="" />
      </div>
      <div className="features-card__content">
        <h5>{title}</h5>
        <p className="mt-2">
          Lorem ipsum dolor sit amet consectet pis cing elit, sed do eiusmod
          tempor.
        </p>
      </div>
    </div>
  );
};

export default FeaturesCard;
