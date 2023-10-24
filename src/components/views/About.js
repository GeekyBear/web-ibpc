import React from "react";
import iglesia from "../../assets/parquecasas.png";
import Footer from "../Home/footer/Footer";
export default function About() {
  return (
    <div>
      <main>
        <div class="container marketing ">
          <div class="row featurette pt-3 align-items-center">
            <div class="col-md-7">
              <h2 class="featurette-heading fw-normal lh-1">¿Quienes somos?</h2>
              <p class="lead">
                {" "}
                Somos una iglesia moldeada por las "Buenas noticias" de quién es
                Jesús y lo que ha hecho. ¡Y puede cambiar tu vida!
              </p>
            </div>
            <div class="col-md-5">
              <img
                src={iglesia}
                alt="Iglesia de Parque Casas"
                className="img-fluid rounded"
              />
              {/* <svg class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-bg)" /><text x="50%" y="50%" fill="var(--bs-secondary-color)" dy=".3em">500x500</text></svg> */}
            </div>
          </div>

          <hr class="featurette-divider" />

          <div class="row featurette">
            <div class="col-md-7 order-md-2">
              <h2 class="featurette-heading fw-normal lh-1">
                Nuestra historia en{" "}
                <span class="text-body-secondary">Parque Casas.</span>
              </h2>
              <p class="lead">
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                sit amet volutpat eros. Donec efficitur semper semper.
                Vestibulum auctor rutrum ante ut pharetra. Phasellus luctus
                lacinia neque. Morbi porttitor mi ex, sit amet ornare nulla
                tempus nec. Sed id luctus neque. Morbi congue sagittis sagittis.
                Aenean sed condimentum mi, in porta erat. Aenean tempor
                facilisis risus id commodo. Donec felis tellus, interdum a
                vulputate a, aliquet eu dui. Vestibulum euismod efficitur mauris
                et varius. Etiam posuere purus vitae gravida varius. Integer
                scelerisque, eros vitae molestie condimentum, sem nunc auctor
                ex, quis aliquam metus felis quis neque. Maecenas consectetur
                dapibus justo, ut eleifend tellus pellentesque ultricies.
                Vivamus eu nisl dolor. Fusce arcu lectus, imperdiet sit amet
                semper sit amet, tempor vitae lacus. Nam bibendum, tortor nec
                laoreet efficitur, neque mauris sagittis dui, in malesuada nisl
              </p>
            </div>
            <div class="col-md-5 order-md-1">
              <img
                src={iglesia}
                alt="Iglesia de Parque Casas"
                className="img-fluid rounded"
              />

              {/* <svg class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-bg)" /><text x="50%" y="50%" fill="var(--bs-secondary-color)" dy=".3em">500x500</text></svg> */}
            </div>
          </div>

          <hr class="featurette-divider" />

          <div class="row featurette">
            <div class="col-md-7">
              <h2 class="featurette-heading fw-normal lh-1">
                Otro panel informativo que quisieran agregar{" "}
              </h2>
              <p class="lead">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                sit amet volutpat eros. Donec efficitur semper semper.
                Vestibulum auctor rutrum ante ut pharetra. Phasellus luctus
                lacinia neque. Morbi porttitor mi ex, sit amet ornare nulla
                tempus nec. Sed id luctus neque. Morbi congue sagittis sagittis.
                Aenean sed condimentum mi, in porta erat. Aenean tempor
                facilisis risus id commodo...
              </p>
            </div>
            <div class="col-md-5">
              <img
                src={iglesia}
                alt="Iglesia de Parque Casas"
                className="img-fluid rounded"
              />
              {/* <span class="text-body-secondary">Checkmate.</span> */}
              {/* <svg class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-bg)" /><text x="50%" y="50%" fill="var(--bs-secondary-color)" dy=".3em">500x500</text></svg> */}
            </div>
          </div>

          <hr class="featurette-divider" />
        </div>
      </main>
      <Footer />
    </div>
  );
}
