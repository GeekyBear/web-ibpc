import React, { useState } from "react";

export default function Pray({ pray, showDetail, mobile }) {
  const [show, setShow] = useState(false);

  return (
    <>
      <li
        id={pray.id}
        onClick={(e) => (mobile ? setShow(!show) : showDetail(e))}
        className="list-group-item list-group-item-action"
      >
        {pray.data.title}
      </li>
      {mobile && show && (
        <li className="list-group-item list-group-item-action">
          {pray.data.description
            ? pray.data.description
            : "No hay una descripcion"}
        </li>
      )}
    </>
  );
}
