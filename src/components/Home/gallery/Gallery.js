import React from "react";
import groups from "../../../assets/groups.jpg";
import events from "../../../assets/eventos.jpg";
import counseling from "../../../assets/counseling.jpg";
import service from "../../../assets/service.jpg";
// import missions from "../../../assets/missions.jpg";

export default function Gallery() {
  return (
    <div className="album py-5 bg-body-tertiary">
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          <div className="col">
            <div className="card shadow-sm">
              <img src={groups} alt="Grupos" className="img-fluid" />
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
              <img src={events} alt="Grupos" className="img-fluid" />
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center">
                  <p className="card-text">Grupos</p>
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
