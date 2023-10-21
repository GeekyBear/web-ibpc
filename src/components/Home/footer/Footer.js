import React from "react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer class="py-5 bg-dark">
      <div class="row">
        <div class="col-6 col-md-2 mb-3">
          <h5>Links</h5>
          <ul class="nav flex-column">
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Inicio</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Reuniones</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Ministerios</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Consejeria</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Contacto</a></li>
          </ul>
        </div>

        <div class="col-6 col-md-2 mb-3">

          <h5>Conectemos!</h5>
          <ul class="nav flex-column">
            <p>info@ibpc.org</p>
            <p>+54 341 777-7777</p>
          </ul>
        </div>

        <div class="col-6 col-md-2 mb-3">
          {/* <h5>Section</h5>
          <ul class="nav flex-column">
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Home</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Features</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Pricing</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">FAQs</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">About</a></li>
          </ul> */}
        </div>

        <div class="col-md-5 offset-md-1 mb-3">
          <form>
            <h5>Suscribete a nuestro newsletter</h5>
            <p>Una compilación mensual de las cosas mas importantes.</p>
            <div class="d-flex flex-column flex-sm-row w-100 gap-2">
              <label for="newsletter1" class="visually-hidden">Email</label>
              <input id="newsletter1" type="text" class="form-control" placeholder="Email address" />
              <button class="btn btn-primary" type="button">Suscribirse</button>
            </div>
          </form>
        </div>
      </div>

      <div class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
        <p>&copy; 2023 ICE Barrio Parque Casase. Todos los derechos reservados.</p>
        <ul class="list-unstyled d-flex">
          <li class="ms-3"><a class="" href="#">Twitter</a></li>
          <li class="ms-3"><a class="" href="#">Instagram</a></li>
          <li class="ms-3"><a class="" href="#">Facebook</a></li>
        </ul>
      </div>
    </footer>
    // <div className={styles.container}>
    //   <div className={styles.single}>
    //     <h5>Conectemos!</h5>
    //     <p>info@ibpc.org</p>
    //     <p>+54 341 777-7777</p>
    //   </div>
    //   <div className={styles.group}>
    //     <div>
    //       <h5>Quick Links</h5>
    //       <p>Domingos</p>
    //       <p>Ministerios familiares</p>
    //       <p>Grupos</p>
    //       <p>Ofrendas</p>
    //       <p>Contactenos</p>
    //     </div>
    //     <div>
    //       <h5>Nuestra ubicacion</h5>
    //       <p>Machain 1277</p>
    //       <p>Rosario, CP 2000</p>
    //       <p>Consejeria de 9am a 5pm</p>
    //     </div>
    //     <div>
    //       <h5>Redes!</h5>
    //       <p>Instagram</p>
    //       <p>Facebook</p>
    //       <p>Twitter</p>
    //     </div>
    //   </div>
    // </div>
  );
}
