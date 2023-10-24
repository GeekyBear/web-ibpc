import React from "react";
import conferencia from "../../../assets/conferencia.webp";
import orador from "../../../assets/orador.webp";
import ultimo from "../../../assets/ultimo-orador.webp";

export default function MyCarousel() {
  return (
    <div
      id="myCarousel"
      className="carousel slide mb-6"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={conferencia} alt="Padre hijo" className="img-fluid" />
          <div className="container">
            <div className="carousel-caption text-start">
              <h1>Dios es fiel</h1>
              <p classNameName="opacity-75">
                44° años bajo su fidelidad y misericordia.
              </p>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img src={orador} alt="Padre hijo" className="img-fluid" />
          <div className="container">
            <div className="carousel-caption">
              <h1>Otro ejemplo de encabezado</h1>
              <p>
                Una representación sobre el contenido que podría tener el
                segundo slide del carrusel.
              </p>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img src={ultimo} alt="Padre hijo" className="img-fluid" />
          <div className="container">
            <div className="carousel-caption text-end">
              <h1>Tercer encabezado de ejemplo.</h1>
              <p>
                Una representación sobre el contenido que podría tener el tercer
                slide del carrusel.
              </p>
            </div>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
