import React from "react";
import cena from "../../assets/cena.webp";
import parque from "../../assets/parque.webp";
import oracion from "../../assets/oracion.webp";

export default function Meetings() {
  return (
    <div>
      <div class="container col-xxl-8 px-4 py-4">
        <div class="row flex-lg-row-reverse align-items-center g-5 py-2">
          <div class="col-10 col-sm-8 col-lg-6">
            <img
              src={cena}
              class="d-block mx-lg-auto img-fluid"
              alt="Cena del Señor en Iglesia Parque Casas"
              width="700"
              height="500"
              loading="lazy"
            />
          </div>
          <div class="col-lg-6">
            <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">
              Cena del Señor
            </h1>
            <p class="lead">
              Es un honor y una bendición reunirnos cada domingo en nuestras
              querida Iglesia en parque casas para celebrar la Cena del Señor.
              En estas reuniones, nos congregamos alrededor de una mesa,
              recordando el sacrificio de nuestro amado Salvador, Jesucristo. El
              pan y el vino que compartimos simbolizan el cuerpo y la sangre de
              Cristo. Es un momento de comunión profunda, reflexión y gratitud.
            </p>
            <p class="lead">
              Que la gracia y la paz del Señor estén con todos ustedes mientras
              compartimos juntos la proxima santa Cena.
            </p>
            <div class="d-grid gap-2 d-md-flex justify-content-md-start">
              <p className="lead text-body-emphasis">DOMINGOS 19hs</p>
            </div>
          </div>
        </div>
      </div>
      <div class="container col-xxl-8 px-4 py-4">
        <div class="row flex-lg-row align-items-center g-5 py-2">
          <div class="col-10 col-sm-8 col-lg-6">
            <img
              src={parque}
              class="d-block mx-lg-auto img-fluid"
              alt="Reunion General en Iglesia Parque Casas"
              width="700"
              height="500"
              loading="lazy"
            />
          </div>
          <div class="col-lg-6">
            <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">
              Reunión General
            </h1>
            <p class="lead">
              En nuestra iglesia, nos congregamos cada domingo para adorar,
              aprender y crecer juntos en nuestra Fe. Nuestra reunión comienza
              con alabanzas y adoración, donde cantamos himnos y alabanzas al
              Señor. Luego, escuchamos un mensaje inspirador basado en las
              Escrituras, que nos desafía a vivir de acuerdo con los principios
              bíblicos.
            </p>
            <p className="lead">
              Todos son bienvenidos a unirse a nosotros en esta experiencia de
              fe y comunidad.
            </p>
            <div class="d-grid gap-2 d-md-flex justify-content-md-start">
              <p className="lead text-body-emphasis">DOMINGOS 20:15Hs</p>
            </div>
          </div>
        </div>
      </div>

      <div class="container col-xxl-8 px-4 py-4">
        <div class="row flex-lg-row-reverse align-items-center g-5 py-2">
          <div class="col-10 col-sm-8 col-lg-6">
            <img
              src={oracion}
              class="d-block mx-lg-auto img-fluid"
              alt="Reunion de Oración en Iglesia Parque Casas"
              width="700"
              height="500"
              loading="lazy"
            />
          </div>
          <div class="col-lg-6">
            <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">
              Reunion de oracion
            </h1>
            <p class="lead">
              Cada miercoles en nuestro local, nos congregamos para un tiempo
              especial de oración y comunión con Dios. En el cual compartimos
              nuestras cargas, agradecemos por las bendiciones de nuestro Padre
              Celestial, buscamos su guía divina y somos edificados con la
              Palabra. Creemos que la oración es poderosa y que Dios escucha
              nuestras oraciones.
            </p>
            <p className="lead">
              Te animamos a unirte a nosotros en este encuentro con Dios y
              podamos juntos, asi como la iglesia primitiva, perseverar juntos
              en la oración.
            </p>
            <div class="d-grid gap-2 d-md-flex justify-content-md-start">
              <p className="lead text-body-emphasis">MIERCOLES 20:30hs</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
