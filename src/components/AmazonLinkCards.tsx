import React from "react";
import { Blog } from "../types";

interface Props {
  blog: Blog;
}

export default function AmazonLinkCard({ blog }: Props) {
  return (
    <a
      href={blog.amazonLink}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-white border p-4 rounded-lg shadow hover:bg-gray-100 text-blue-600"
    >
      {blog.title}
    </a>
  );
}
