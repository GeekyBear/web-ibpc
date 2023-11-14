import React, { useEffect } from "react";
import preadolescentes from "../../assets/preadolescentes.webp";
import adolescentes from "../../assets/adolescentes.webp";
import jovenes from "../../assets/jovenes.webp";
import matrimonios from "../../assets/matrimonios.webp";
import escuelita from "../../assets/escuelita.webp";
import mujeres from "../../assets/mujeres.webp";
import varones from "../../assets/varones.webp";
import celulas from "../../assets/celulas.webp";

export default function Ministries() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div class="album py-5 bg-body-tertiary">
      <div class="container">
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          <div class="col">
            <div class="card shadow-sm">
              <img src={preadolescentes} alt="Preadolescentes" />

              <div class="card-body">
                <h5 class="card-title">Preadolescentes</h5>
                <p class="card-text">
                  Aca podemos agregar una descripcion sobre la actividad.
                  Limites de edad. Ademas de adicional los horarios.
                </p>
                <div class="d-flex justify-content-between align-items-center">
                  <small class="text-body-secondary">
                    Todos los sabados a las 10hs
                  </small>
                  <small class="text-body-secondary">En Netri </small>
                </div>
              </div>
            </div>
          </div>
          {/* Adolescentes */}
          <div class="col">
            <div class="card shadow-sm">
              <img src={adolescentes} alt="adolescentes" />
              <div class="card-body">
                <h5 class="card-title">Adolescentes</h5>
                <p class="card-text">
                  Aca podemos agregar una descripcion sobre la actividad.
                  Limites de edad. Ademas de adicional los horarios.
                </p>
                <div class="d-flex justify-content-between align-items-center">
                  <small class="text-body-secondary">
                    Todos los sabados a las 16hs
                  </small>
                  <small class="text-body-secondary">En Netri </small>
                </div>
              </div>
            </div>
          </div>
          {/* Jovenes */}
          <div class="col">
            <div class="card shadow-sm">
              <img src={jovenes} alt="Jovenes" />
              <div class="card-body">
                <h5 class="card-title">Jovenes</h5>
                <p class="card-text">
                  Aca podemos agregar una descripcion sobre la actividad.
                  Limites de edad. Ademas de adicional los horarios.
                </p>
                <div class="d-flex justify-content-between align-items-center">
                  <small class="text-body-secondary">
                    Todos los viernes - 20:30hs
                  </small>
                  <small class="text-body-secondary">En Netri </small>
                </div>
              </div>
            </div>
          </div>
          {/* Escuela Dominical */}
          <div class="col">
            <div class="card shadow-sm">
              <img src={escuelita} alt="Escuela Bíblica Dominical" />
              <div class="card-body">
                <h5 class="card-title">Escuela Bíblica Dominical</h5>
                <p class="card-text">
                  Aca podemos agregar una descripcion sobre la actividad.
                  Limites de edad. Ademas de adicional los horarios.
                </p>
                <div class="d-flex justify-content-between align-items-center">
                  <small class="text-body-secondary">
                    Todos los domingos - 10hs
                  </small>
                  <small class="text-body-secondary">En Netri </small>
                </div>
              </div>
            </div>
          </div>
          {/* Matrimonios */}
          <div class="col">
            <div class="card shadow-sm">
              <img src={matrimonios} alt="Matrimonios" />
              <div class="card-body">
                <h5 class="card-title">Matrimonios</h5>
                <p class="card-text">
                  Aca podemos agregar una descripcion sobre la actividad.
                  Limites de edad. Ademas de adicional los horarios.
                </p>
                <div class="d-flex justify-content-between align-items-center">
                  <small class="text-body-secondary">
                    Todos los 2° sabados - 21hs
                  </small>
                  <small class="text-body-secondary">En Netri </small>
                </div>
              </div>
            </div>
          </div>
          {/* Mujeres */}
          <div class="col">
            <div class="card shadow-sm">
              <img src={mujeres} alt="Mujeres" />
              <div class="card-body">
                <h5 class="card-title">Reunion de Mujeres</h5>
                <p class="card-text">
                  Aca podemos agregar una descripcion sobre la actividad.
                  Limites de edad. Ademas de adicional los horarios.
                </p>
                <div class="d-flex justify-content-between align-items-center">
                  <small class="text-body-secondary">
                    Todos los 1° sabados - 9hs
                  </small>
                  <small class="text-body-secondary">En Machain 1277 </small>
                </div>
              </div>
            </div>
          </div>
          {/* Varones */}
          <div class="col">
            <div class="card shadow-sm">
              <img src={varones} alt="Mujeres" />
              <div class="card-body">
                <h5 class="card-title">Reunion de Varones</h5>
                <p class="card-text">
                  Aca podemos agregar una descripcion sobre la actividad.
                  Limites de edad. Ademas de adicional los horarios.
                </p>
                <div class="d-flex justify-content-between align-items-center">
                  <small class="text-body-secondary">
                    Todos los 3° sabados - 20hs
                  </small>
                  <small class="text-body-secondary">En Machain 1277 </small>
                </div>
              </div>
            </div>
          </div>
          {/* Reuniones caseras */}
          <div class="col">
            <div class="card shadow-sm">
              <img src={celulas} alt="Calulas" />
              <div class="card-body">
                <h5 class="card-title">Reuniones caseras</h5>
                <p class="card-text">
                  Aca podemos agregar una descripcion sobre la actividad.
                  Limites de edad. Ademas de adicional los horarios.
                </p>
                <div class="d-flex justify-content-between align-items-center">
                  <small class="text-body-secondary">
                    Consultar los horarios
                  </small>
                  <small class="text-body-secondary">En hogares</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
