import Fade from "react-reveal/Fade";

const BlogHeader = (): JSX.Element => {
  return (
    <div className="section-header">
      <Fade bottom>
        <div className="title">
          <h1>Article and News</h1>
        </div>
        <div className="text">
          <p>News, tips, tricks and more</p>
        </div>
      </Fade>
    </div>
  );
};

export default BlogHeader;
