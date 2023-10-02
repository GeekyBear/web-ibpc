import React from "react";
import Card from "../../card/Card";
import styles from "./More.module.css";

const titles = ["Quienes somos", "Testimonios", "Contactenos"];
export default function More() {
  return (
    <div className={styles.container}>
      {titles?.map((card, index) => (
        <Card key={index} title={titles[index]} index={index} />
      ))}
    </div>
  );
}
