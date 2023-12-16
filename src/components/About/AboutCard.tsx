interface IaboutProps {
  img: string;
}
const AboutCard: React.FC<IaboutProps> = ({ img }): JSX.Element => {
  return (
    <div className="about-card">
      <div className="about-card__cover">
        <img src={img} alt="" />
      </div>
      <div className="about-card__text">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac
          ultrices odio.{" "}
        </p>
      </div>
    </div>
  );
};

export default AboutCard;
