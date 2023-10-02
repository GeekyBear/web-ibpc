import React from "react";
import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";

export default function NavBar() {
  function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === styles.topnav) {
      x.className += " " + styles.responsive;
    } else {
      console.log("false");
      x.className = styles.topnav;
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <p>IBPC</p>
      </div>
      <div className={styles.topnav} id="myTopnav">
        {/* <a href="#home" className={styles.active}>
          IBPC
        </a> */}
        <Link to={"/about"}>Sobre nosotros</Link>
        <Link to={"/blog"}>Blog</Link>
        <Link to={"/contact"}>Contacto</Link>
        <a
          href="javascript:void(0);"
          className={styles.icon}
          onClick={() => myFunction()}
        >
          <i class="fa fa-bars"></i>
        </a>
      </div>
    </div>
  );
}
