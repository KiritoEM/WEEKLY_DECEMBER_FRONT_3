import BlogHeader from "./blog/BlogHeader";
import Blogcontent from "./blog/Blogcontent";

const Blog = (): JSX.Element => {
  return (
    <section id="blog">
      <BlogHeader />
      <Blogcontent />
    </section>
  );
};

export default Blog;
