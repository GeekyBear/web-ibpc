import React from "react";
import styles from "./BlogPost.module.css";
import gustavo from "../../../assets/gustavo.jpg";
// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function BlogPost({ post }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/blog/${post.id}`, { state: { post } });
  };

  return (
    <div className="card h-100">
      <div className="card-body row">
        <div className="col-9">
          <h5 className="card-title">{post?.title}</h5>
          <p className="card-text">{post?.content.slice(0, 200)}</p>
          <button onClick={() => handleClick()}>Leer más...</button>
          {/* <Link to={`/blog/${post.id}`}>VER MAS ID: {post.id}</Link> */}
        </div>
        <div className="col-3">
          <img src={gustavo} alt="author" className={styles.postImg} />
          <p>por Gustavo Sanchez</p>
        </div>
      </div>
    </div>
  );
}
