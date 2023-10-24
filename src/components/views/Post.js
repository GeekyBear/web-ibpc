import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Post() {
  const navigate = useNavigate();
  const { state } = useLocation();
  let post = null;

  if (state?.post) {
    post = state.post;
  }

  return (
    <div>
      <button onClick={() => navigate(-1)}>Volver</button>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}
