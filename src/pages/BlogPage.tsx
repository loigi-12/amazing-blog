import React from "react";
import { blogs } from "../data/blogs";
import BlogCard from "../components/BlogCard";
import AmazonLinkCard from "../components/AmazonLinkCards";

const BlogPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-6">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>

        <aside className="space-y-4">
          <h3 className="text-lg font-bold">Recommended on Amazon</h3>
          {blogs.map((blog) => (
            <AmazonLinkCard key={blog.id} blog={blog} />
          ))}
        </aside>
      </div>
    </div>
  );
};

export default BlogPage;
