import React from "react";
import { useNavigate } from "react-router-dom";
import mission from "../../../assets/missions.jpg";

export default function BlogPost({ post }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/blog/${post.id}`, { state: { post } });
  };

  return (
    <article class="blog-post">
      <h2 class="display-5 link-body-emphasis mb-1">{post.title}</h2>
      <p class="blog-post-meta">
        {post.date} por <a href="#">{post.author}</a>
      </p>
      <p>{post.content}</p>
      <hr />
    </article>
  );
}
