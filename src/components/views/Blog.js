import React from "react";
import styles from "./Blog.module.css";
import BlogPost from "../Home/blogPost/BlogPost";
import Footer from "../Home/footer/Footer";

export default function Blog() {
  return (
    <>
      <head>
        <title>Blog Post Layout</title>
      </head>
      <body>
        <div class="row row-cols-1 row-cols-md-2 g-4 p-3">
          <div class="col">
            <BlogPost />
          </div>
          <div class="col">
            <BlogPost />
          </div>
          <div class="col">
            <BlogPost />
          </div>
          <div class="col">
            <BlogPost />
          </div>
          <div class="col">
            <BlogPost />
          </div>
          <div class="col">
            <BlogPost />
          </div>
          <div class="col">
            <BlogPost />
          </div>
          <div class="col">
            <BlogPost />
          </div>
        </div>
        {/* <div class="container"> */}
        <Footer />
        {/* </div> */}
      </body>
    </>
  );
}
