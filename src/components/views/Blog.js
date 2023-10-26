import React from "react";
import BlogPost from "../Home/blogPost/BlogPost";
import Footer from "../Home/footer/Footer";
import posts from "../../data/data.js";

export default function Blog() {
  return (
    <div>
      <div className="container">
        <div class="p-4 p-md-5 mb-4 rounded text-body-emphasis bg-body-secondary">
          <div class="col-lg-6 px-0">
            <h1 class="display-4 fst-italic">Nuestro blog</h1>
            <p class="lead my-3">Lee alguno de nuestros ultimos articulos</p>
          </div>
        </div>

        <div class="row g-5">
          <div class="col-md-12">
            {posts.map((post) => (
              <div key={post.id} className="col">
                <BlogPost post={post} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
