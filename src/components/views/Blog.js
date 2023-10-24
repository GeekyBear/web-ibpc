import React from "react";
// import styles from "./Blog.module.css";
import BlogPost from "../Home/blogPost/BlogPost";
import Footer from "../Home/footer/Footer";
import posts from "../../data/data.js";

export default function Blog() {
  return (
    <>
      <div className="row row-cols-1 row-cols-md-2 g-4 p-3">
        {posts.map((post) => (
          <div key={post.id} className="col">
            <BlogPost post={post} />
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
}
