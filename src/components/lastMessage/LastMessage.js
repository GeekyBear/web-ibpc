import React from "react";
import styles from "./LastMessage.module.css";

export default function LastMessage() {
  return (
    <div className={styles.container}>
      <div className={styles.internal}>
        <h2>Ultimo mensaje</h2>
        <button>Mirar</button>
      </div>
    </div>
  );
}
