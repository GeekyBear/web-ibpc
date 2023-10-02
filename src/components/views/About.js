import React from "react";
import styles from "./About.module.css";
import iglesia from "../../assets/parquecasas.png";
export default function About() {
  return (
    <div>
      <main
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div className={styles.container}>
          <div className={styles.image}>
            <img src={iglesia} alt="Iglesia de Parque Casas" />
          </div>
          <div className={styles.whoWeAre}>
            <h2>¿Quienes somos?</h2>
            <span>
              Somos una iglesia moldeada por las "Buenas noticias" de quién es
              Jesús y lo que ha hecho. ¡Y puede cambiar tu vida!
            </span>
          </div>
        </div>
        <hr />
        <div className={styles.history}>
          <h2>Nuestra historia</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit
            amet volutpat eros. Donec efficitur semper semper. Vestibulum auctor
            rutrum ante ut pharetra. Phasellus luctus lacinia neque. Morbi
            porttitor mi ex, sit amet ornare nulla tempus nec. Sed id luctus
            neque. Morbi congue sagittis sagittis. Aenean sed condimentum mi, in
            porta erat. Aenean tempor facilisis risus id commodo. Donec felis
            tellus, interdum a vulputate a, aliquet eu dui. Vestibulum euismod
            efficitur mauris et varius. Etiam posuere purus vitae gravida
            varius. Integer scelerisque, eros vitae molestie condimentum, sem
            nunc auctor ex, quis aliquam metus felis quis neque. Maecenas
            consectetur dapibus justo, ut eleifend tellus pellentesque
            ultricies. Vivamus eu nisl dolor. Fusce arcu lectus, imperdiet sit
            amet semper sit amet, tempor vitae lacus. Nam bibendum, tortor nec
            laoreet efficitur, neque mauris sagittis dui, in malesuada nisl
          </p>
          <br />
          <p>
            dolor eu est. Cras pulvinar, diam nec euismod bibendum, tellus urna
            euismod ligula, ac luctus lectus urna at diam. Donec lacinia mi vel
            neque scelerisque, sed porta purus sodales. Morbi imperdiet, quam at
            ultricies placerat, elit nibh finibus ex, vel mollis arcu ante in
            magna. Aliquam eu tempus elit, et mattis mauris. Vestibulum lobortis
            mauris mauris, efficitur luctus augue luctus quis. Vestibulum
            fermentum sollicitudin orci, pellentesque consequat sapien consequat
            ut. Fusce enim turpis, dignissim ut molestie lobortis, efficitur non
            augue. Praesent a leo non sapien pharetra ultricies eget nec turpis.
            Sed porta ligula id metus molestie fringilla. Aliquam diam nisl,
            auctor sit amet ante a, tempus porttitor nisi. Vivamus faucibus
            purus hendrerit, feugiat neque quis, posuere purus.
          </p>
          <br />
          <p>
            Nulla vel elit bibendum, egestas mauris quis, malesuada est. Quisque
            sit amet placerat odio. Nam a diam a felis porttitor ultrices
            feugiat vitae orci. Nam dui urna, egestas a nisl nec, imperdiet
            dictum dui. Aliquam nec massa felis. Phasellus in pharetra magna, ut
            malesuada augue. Sed non lacus ac nulla luctus sodales sed non nisi.
            Aenean nec porttitor nibh. Maecenas in mi nulla. Pellentesque
            habitant morbi tristique senectus et netus et malesuada fames ac
            turpis egestas. Suspendisse potenti. Sed varius, eros in porttitor
            lobortis, eros velit vestibulum purus, eu finibus nunc quam a dui.
            Etiam elit purus, consectetur non nulla quis, ornare egestas lacus.
          </p>
        </div>
      </main>
    </div>
  );
}
