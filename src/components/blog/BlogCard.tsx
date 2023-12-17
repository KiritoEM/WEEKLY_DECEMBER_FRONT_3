interface IblogProps {
  subtitle: string;
  title: string;
  date: string;
  tags: Itags[];
  img: string;
  id?: string;
}

interface Itags {
  value: string;
}

const BlogCard: React.FC<IblogProps> = ({
  subtitle,
  title,
  date,
  tags,
  id,
  img,
}): JSX.Element => {
  return (
    <div className="blog-card" id={id}>
      <div className="blog-card__cover">
        <img src={img} alt="" />
      </div>
      <div className="blog-card__header">
        <h6>{subtitle}</h6>
        <h4>{title}</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minimvel iam, quis nostrud exercitation ullamco laboris...
        </p>
      </div>
      <div className="line"></div>
      <div className="blog-card__note">
        <div className="tags">
          {tags.map((item, index) => (
            <button className="btn" key={index}>
              {item.value}
            </button>
          ))}
        </div>
        <div className="date">
          <p>{date}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
