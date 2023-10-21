import React from "react";
import styles from "./BlogPost.module.css";
import gustavo from "../../../assets/gustavo.jpg";
export default function BlogPost() {
  return (
    <div className="card h-100">
      <div className="card-body row">
        <div className="col-9">

          <h5 className="card-title">Titulo del articulo</h5>
          <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut tellus
            vel augue semper iaculis sed eget urna. Aliquam tortor neque, hendrerit
            eu nunc vel, tempus feugiat sapien. Sed viverra auctor scelerisque.
            Etiam fringilla erat enim, eu egestas leo vulputate vitae. Nulla vitae..</p>
        </div>
        <div className="col-3">

          <img src={gustavo} alt="author" className={styles.postImg} />
          <p>por Gustavo Sanchez</p>
        </div>
      </div>


    </div>
  );
}
