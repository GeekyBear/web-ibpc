import React from "react";
import styles from "./Gallery.module.css";
import groups from "../../../assets/groups.jpg";
import events from "../../../assets/eventos.jpg";
import counseling from "../../../assets/counseling.jpg";
import service from "../../../assets/service.jpg";
import missions from "../../../assets/missions.jpg";

export default function Gallery() {
  return (
    <div className={styles.container}>
      <ul className={styles.imageGallery}>
        <li>
          <p>Grupos</p>
          <img src={groups} alt="Grupos" />
          <div className={styles.overlay}>
            <span>Grupos</span>
          </div>
        </li>
        <li>
          <p>Eventos</p>
          <img src={events} alt="Eventos" />
          <div className={styles.overlay}>
            <span>Eventos</span>
          </div>
        </li>
        <li>
          <p>Consejeria pastoral</p>
          <img src={counseling} alt="Consejeria pastoral" />
          <div className={styles.overlay}>
            <span>Consejeria pastoral</span>
          </div>
        </li>
        <li>
          <p>Reuniones</p>
          <img src={service} alt="Reuniones" />
          <div className={styles.overlay}>
            <span>Reuniones</span>
          </div>
        </li>
        <li>
          <p>Misiones</p>
          <img src={events} alt="Misiones" />
          <div className={styles.overlay}>
            <span>Misiones</span>
          </div>
        </li>
        <li>
          <p>Nuestra declaracion de FE</p>
          <img src={counseling} alt="Otros" />
          <div className={styles.overlay}>
            <span>Nuestra declaracion de FE</span>
          </div>
        </li>
      </ul>
    </div>
  );
}
