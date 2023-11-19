import React from "react";
import styles from "./Card.module.css";
import conferencia from "../../assets/conferencia.webp";
import image2 from "../../assets/eventos.jpg";
import contactus from "../../assets/contactus.webp";
import { Link } from "react-router-dom";

export default function Card({ title, index }) {
  return (
    <div className={styles.container}>
      <div className={styles.internal}>
        <img
          alt="Imagenes"
          src={index === 0 ? conferencia : index === 1 ? image2 : contactus}
          className={styles.image}
        />
        <div className={styles.info}>
          <h4>{title}</h4>
          <button>
            <Link
              to={index === 0 ? "/about" : index === 1 ? "/about" : "/contact"}
              className="nav-link text-black"
            >
              Entrar
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
