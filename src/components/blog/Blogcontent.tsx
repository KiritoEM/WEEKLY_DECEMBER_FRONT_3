import BlogCard from "./BlogCard";
import blogData from "@/helper/dataHelper/blogData";

const Blogcontent = (): JSX.Element => {
  const { blog } = blogData();
  return (
    <div className="section-content">
      <div className="shape-1">
        <img src="/images/blog/shape-1.png" alt="" />
      </div>
      <div className="row">
        {blog.map((item, index) => (
          <div className="col-6" key={index}>
            <BlogCard {...item} />
          </div>
        ))}
      </div>
      <div className="shape-2">
        <img src="/images/blog/shape-2.png" alt="" />
      </div>
    </div>
  );
};

export default Blogcontent;
