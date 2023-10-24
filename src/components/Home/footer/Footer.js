import React from "react";
import {
  AiFillFacebook,
  AiFillLinkedin,
  AiOutlineTwitter,
} from "react-icons/ai";

export default function Footer() {
  return (
    <footer className="py-5 bg-dark">
      <div className="row px-4 no-gutters">
        <div className="col-6 col-md-2 mb-3">
          <h5 className="text-white">Links de interes</h5>

          <ul className="nav flex-column">
            {/* <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-white">
                Inicio
              </a>
            </li> */}
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-white">
                Reuniones
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-white">
                Ministerios
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-white">
                Consejeria
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-white">
                Contacto
              </a>
            </li>
          </ul>
        </div>

        <div className="col-6 col-md-2 mb-3">
          <h5 className="text-white">Conectemos!</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-white">
                info@ibpc.org
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-white">
                +54 (0341) 777 7777
              </a>
            </li>
          </ul>
        </div>

        <div className="col-6 col-md-1 mb-3">
          <h5 className="text-white">Links</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-white">
                Inicio
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-white">
                Nuestra iglesia
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-white">
                Blog
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-white">
                Contacto
              </a>
            </li>
          </ul>
        </div>

        <div className="col-md-5 offset-md-1 mb-3">
          <form>
            <h5 className="text-white">Suscribete a nuestro newsletter</h5>
            <p>Una compilación mensual de las cosas mas importantes.</p>
            <div className="d-flex flex-column flex-sm-row w-100 gap-2">
              <label htmlFor="newsletter1" className="visually-hidden">
                Email
              </label>
              <input
                id="newsletter1"
                type="text"
                className="form-control"
                placeholder="Email address"
              />
              <button className="btn btn-primary" type="button">
                Suscribirse
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="d-flex flex-column no-gutters flex-sm-row justify-content-between py-4 my-4 border-top">
        <p>
          &copy; 2023 ICE Barrio Parque Casase. Todos los derechos reservados.
        </p>
        <ul className="list-unstyled d-flex">
          <li className="ms-3">
            <a className="" href="#">
              <AiOutlineTwitter className="text-white" />
            </a>
          </li>
          <li className="ms-3">
            <a className="" href="#">
              <AiFillLinkedin className="text-white" />
            </a>
          </li>
          <li className="ms-3">
            <a className="" href="#">
              <AiFillFacebook className="text-white" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
