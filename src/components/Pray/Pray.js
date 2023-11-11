import React, { useState } from "react";

export default function Pray({ pray, showDetail, mobile }) {
  const [show, setShow] = useState(false);

  return (
    <div className="border border-secondary">
      <div
        id={pray.id}
        onClick={(e) => (mobile ? setShow(!show) : showDetail(e))}
        className={show ? "bg-body-secondary fw-bold p-3 " : "fw-bold p-3"}
        // className="list-group-item list-group-item-action p-3"
      >
        {pray.data.title}
      </div>
      {mobile && show && (
        <div
          // className="list-group-item list-group-item-action text-start p-4"
          className={
            show ? "bg-body-secondary  border text-start p-4" : "bg-white p-4"
          }
          // style={{ backgroundColor: "#f5f5f5" }}
        >
          {pray.data.description
            ? "Descripción: " + pray.data.description
            : "No hay una descripcion"}
        </div>
      )}
    </div>
  );
}
