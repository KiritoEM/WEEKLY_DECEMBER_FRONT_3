interface IsponsorsProps {
  id?: string;
  title: string;
  price: string;
  points: Ipoints[];
  important?: string
}

interface Ipoints {
  text: string;
}

const SponsorsCard: React.FC<IsponsorsProps> = ({
  id,
  title,
  price,
  points,
  important
}): JSX.Element => {
  return (
    <div className="sponsors-card" id={id}>
      <div className="price">
        <div className="header">
          <div className="title">
            <div><h3>{title}</h3></div>
            <div><p>{important}</p></div>
          </div>
          <div className="text">
            <p>
              Lorem ipsum dolor sit amet consectet cing elit, sed do eiusmod
              tempor.
            </p>
          </div>
        </div>
        <div className="button-price">
          <div className="button">
            <button className="btn">SUBSCRIBE</button>
          </div>
          <div className="price-value">
            <h5>
              {price}
              <br />
              <span>/month</span>
            </h5>
          </div>
        </div>
      </div>
      <div className="benefits">
        <p>What’s included:</p>

        <div className="points">
          {points.map((item, index) => (
            <p key={index}>• {item.text}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SponsorsCard;
