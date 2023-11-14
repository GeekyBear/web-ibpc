import React from "react";
import parque from "../../../assets/parque.webp";
import mujeres from "../../../assets/mujeres.webp";
import counseling from "../../../assets/counseling.jpg";
import service from "../../../assets/service.jpg";
import { Link } from "react-router-dom";
// import missions from "../../../assets/missions.jpg";

export default function Gallery() {
  return (
    <div className="album py-5 bg-body-tertiary">
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          <div className="col">
            <div className="card shadow-sm">
              <img src={parque} alt="Grupos" className="img-fluid" />
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center">
                  <p className="card-text">Reuniones</p>
                  <div className="btn-group">
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-secondary"
                    >
                      <Link to={"/meetings"} className="nav-link text-black">
                        Entrar
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card shadow-sm">
              <img src={mujeres} alt="Grupos" className="img-fluid" />
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center">
                  <p className="card-text">Ministerios</p>
                  <div className="btn-group">
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-secondary"
                    >
                      <Link to={"/ministries"} className="nav-link text-black">
                        Entrar
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card shadow-sm">
              <img src={counseling} alt="Grupos" className="img-fluid" />
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center">
                  <p className="card-text">Consejería pastoral</p>
                  <div className="btn-group">
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-secondary"
                    >
                      Entrar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card shadow-sm">
              <img src={service} alt="Grupos" className="img-fluid" />
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center">
                  <p className="card-text">Reuniones</p>
                  <div className="btn-group">
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-secondary"
                    >
                      Entrar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card shadow-sm">
              <img
                src={service}
                alt="Grupos"
                className="img-fluid  mx-auto d-block"
              />
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center">
                  <p className="card-text">Misiones</p>
                  <div className="btn-group">
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-secondary"
                    >
                      Entrar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card shadow-sm">
              <img
                src={service}
                alt="Grupos"
                className="img-fluid  mx-auto d-block"
              />
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center">
                  <p className="card-text">Nuestra declaracion de fe</p>
                  <div className="btn-group">
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-secondary"
                    >
                      Entrar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
