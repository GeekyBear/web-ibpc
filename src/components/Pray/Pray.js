import React, { useState } from "react";

export default function Pray({ pray, showDetail, mobile }) {
  const [show, setShow] = useState(false);

  return (
    <>
      <li
        id={pray.id}
        onClick={(e) => (mobile ? setShow(!show) : showDetail(e))}
        className="list-group-item list-group-item-action p-3"
      >
        {pray.data.title}
      </li>
      {mobile && show && (
        <li
          className="list-group-item list-group-item-action text-start p-4"
          style={{ backgroundColor: "#f5f5f5" }}
        >
          {pray.data.description
            ? pray.data.description
            : "No hay una descripcion"}
        </li>
      )}
    </>
  );
}
