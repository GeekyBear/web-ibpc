import React from "react";

export default function Contact() {
  return (
    <div className="row row-cols-1 row-cols-md-2">
      <div className="col" style={{ minHeight: "50vh" }}>
        <h2 className="m-4">Enviar Mensaje</h2>
        <div className="form-floating m-4">
          <input
            type="text"
            className="form-control"
            id="floatingInput"
            placeholder="Su nombre"
          />
          <label for="floatingInput">Nombre</label>
        </div>
        <div className="form-floating m-4">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="nombre@correo.com"
          />
          <label for="floatingInput">Email</label>
        </div>
        <div className="form-floating m-4">
          <textarea
            className="form-control"
            placeholder="Deje su mensaje aqui"
            id="floatingTextarea"
            style={{ minHeight: "20vh" }}
          ></textarea>
          <label for="floatingTextarea">Mensaje</label>
        </div>
        <div className="form-floating m-4">
          <button type="button" className="btn btn-primary ">
            Enviar
          </button>
        </div>
      </div>
      <div className="col">
        <iframe
          title="Ultimo mensaje"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d837.452913349281!2d-60.6977118304824!3d-32.9031476983507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b653733ce3d9db%3A0x50cf8e8a99166be5!2sGregorio%20J.%20Macha%C3%ADn%201277%2C%20Rosario%2C%20Santa%20Fe!5e0!3m2!1ses-419!2sar!4v1700358530357!5m2!1ses-419!2sar"
          width="100%"
          height="100%"
          style={{ minHeight: 500, flex: 1 }}
          allowfullscreen="true"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
