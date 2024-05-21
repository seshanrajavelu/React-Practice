import React from "react";
import { useParams } from "react-router-dom";

export const Blog = () => {
  let { postId } = useParams();

  return (
    <div>
      <h2>Blog Post {postId}</h2>
      <p>Blog post content goes here...</p>
    </div>
  );
};

export default Blog;
