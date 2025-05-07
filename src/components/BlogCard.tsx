import React from "react";
import { Blog } from "../types";

interface Props {
  blog: Blog;
}

export default function BlogCard({ blog }: Props) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
      <p className="text-gray-700 mb-4">{blog.excerpt}</p>
      <button className="text-sm text-blue-600 hover:underline">Read More</button>
    </div>
  );
}
