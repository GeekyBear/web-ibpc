import React from "react";
import styles from "./Gallery.module.css";
import groups from "../../assets/groups.jpg";
import events from "../../assets/eventos.jpg";
import counseling from "../../assets/counseling.jpg";
import service from "../../assets/service.jpg";
import missions from "../../assets/missions.jpg";

export default function Gallery() {
  return (
    <div className={styles.container}>
      <ul className={styles.imageGallery}>
        <li>
          <img src={groups} alt="Grupos" />
          <div className={styles.overlay}>
            <span>Grupos</span>
          </div>
        </li>
        <li>
          <img src={events} alt="Eventos" />
          <div className={styles.overlay}>
            <span>Eventos</span>
          </div>
        </li>
        <li>
          <img src={counseling} alt="Consejeria pastoral" />
          <div className={styles.overlay}>
            <span>Consejeria pastoral</span>
          </div>
        </li>
        <li>
          <img src={service} alt="Servicio" />
          <div className={styles.overlay}>
            <span>Servicio</span>
          </div>
        </li>
        <li>
          <img src={events} alt="Misiones" />
          <div className={styles.overlay}>
            <span>Misiones</span>
          </div>
        </li>
        <li>
          <img src={counseling} alt="Otros" />
          <div className={styles.overlay}>
            <span>Nuestra declaracion de FE</span>
          </div>
        </li>
      </ul>
    </div>
  );
}
