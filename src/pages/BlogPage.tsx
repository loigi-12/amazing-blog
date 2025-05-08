import { blogs } from "../data/blogs";
import BlogCard from "../components/BlogCard";
import AmazonLinkCard from "../components/AmazonLinkCard";

const BlogPage = () => {
  return (
    <div className="container py-4">
      <div className="row">
        <div className="col-md-8">
          <h1 className="fw-bold mb-5">Blogs</h1>
          {blogs.map((blog) => (
            <div className="mb-4">
              <BlogCard key={blog.id} blog={blog} />
            </div>
          ))}
        </div>

        <aside className="col-md-4">
          <h4 className="fw-bold mb-3">Recommended on Amazon</h4>
          {blogs.map((blog, index) => (
            <div className="mb-3">
              {index + 1}. <AmazonLinkCard key={blog.id} blog={blog} />{" "}
            </div>
          ))}
        </aside>
      </div>
    </div>
  );
};

export default BlogPage;
