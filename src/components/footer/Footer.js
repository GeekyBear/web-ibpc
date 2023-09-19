import React from "react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.single}>
        <h5>Conectemos!</h5>
        <p>info@ibpc.org</p>
        <p>+54 341 777-7777</p>
      </div>
      <div className={styles.group}>
        <div>
          <h5>Quick Links</h5>
          <p>Domingos</p>
          <p>Ministerios familiares</p>
          <p>Grupos</p>
          <p>Ofrendas</p>
          <p>Contactenos</p>
        </div>
        <div>
          <h5>Nuestra ubicacion</h5>
          <p>Machain 1277</p>
          <p>Rosario, CP 2000</p>
          <p>Consejeria de 9am a 5pm</p>
        </div>
        <div>
          <h5>Redes!</h5>
          <p>Instagram</p>
          <p>Facebook</p>
          <p>Twitter</p>
        </div>
      </div>
    </div>
  );
}
