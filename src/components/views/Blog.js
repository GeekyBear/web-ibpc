import React from "react";
import styles from "./Blog.module.css";
import BlogPost from "../Home/blogPost/BlogPost";

export default function Blog() {
  return (
    <>
      <head>
        <title>Blog Post Layout</title>
      </head>
      <body>
        <div className={styles.wrapper}>
          <div className={styles.hero}>
            <h1>
              <a href="#">Bienvenido a nuestro blog</a>
            </h1>
          </div>
        </div>
        <div className={styles.container}>
          <BlogPost />
          <BlogPost />
          <BlogPost />
          <BlogPost />
          <BlogPost />
          <BlogPost />
        </div>
        <footer>
          <p>
            Text generated by <a href="#">Startup Ipsum</a>
          </p>
        </footer>
      </body>
    </>
  );
}