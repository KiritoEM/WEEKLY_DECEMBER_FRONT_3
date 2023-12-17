import BlogCard from "./BlogCard";
import blogData from "@/helper/dataHelper/blogData";

const Blogcontent = (): JSX.Element => {
  const { blog } = blogData();
  return (
    <div className="section-content">
      <div className="row">
        {blog.map((item, index) => (
          <div className="col-6" key={index}>
            <BlogCard {...item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogcontent;
