import React from "react";
import styles from "./Card.module.css";
import image1 from "../../assets/preacher.jpg";
import image2 from "../../assets/eventos.jpg";
import image3 from "../../assets/groups.jpg";

export default function Card({ title, index }) {
  return (
    <div className={styles.container}>
      <div className={styles.internal}>
        <img
          src={index === 0 ? image1 : index === 1 ? image2 : image3}
          className={styles.image}
        />
        <div className={styles.info}>
          <h4>{title}</h4>
          <button>Explorar</button>
        </div>
      </div>
    </div>
  );
}
