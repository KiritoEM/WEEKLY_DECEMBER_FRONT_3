interface IepisodesProps {
  id?: string;
  img: string;
  subtitle: string;
  title: string;
  tags: Itags[];
}

interface Itags {
  label: string;
}

const EpisodesCard: React.FC<IepisodesProps> = ({
  id,
  img,
  subtitle,
  title,
  tags,
}): JSX.Element => {
  return (
    <div className="episodes-card" id={id}>
      <div className="first-section">
        <div className="cover">
          <img src={img} alt="" />
        </div>
        <div className="header">
          <div className="title">
            <h6>{subtitle}</h6>
            <h5>{title}</h5>
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
      <div className="second-section">
        <div className="tags">
          {tags.map((item, index) => (
            <button className="btn" key={index}>
              {" "}
              {item.label}
            </button>
          ))}
        </div>
        <div className="hosted">
          <p>
            Hosted by: <img src="/images/episodes/host.png" alt="" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default EpisodesCard;
