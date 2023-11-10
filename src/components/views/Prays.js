import React, { useEffect } from "react";
import { useState } from "react";
import Pray from "../Pray/Pray";
import { getPrays } from "../../firebase/firebase";

export default function Prays() {
  const [prays, setPrays] = useState([]);
  const [prayDetail, setPrayDetail] = useState({});
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  const setWindowDimensions = () => {
    setWindowWidth(window.innerWidth);
    setWindowHeight(window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener("resize", setWindowDimensions);
    return () => {
      window.removeEventListener("resize", setWindowDimensions);
    };
  }, []);

  useEffect(() => {
    async function fetchPrayers() {
      const querySnapshot = await getPrays();
      const praysData = querySnapshot.docs.map((doc) => {
        const id = doc.id;
        const data = doc.data();
        return { id, data };
      });

      setPrays(() => praysData);
    }
    fetchPrayers();
  }, []);

  const showDetail = (e) => {
    const { id } = e.target;
    const currentPray = prays.find((pray) => pray.id.toString() === id);
    setPrayDetail(() => currentPray);
  };

  return (
    <div className="container-fluid text-center">
      {windowWidth > 600 ? (
        <div className="row">
          <div className="col">
            <ul
              className="list-group"
              style={{ height: "100vh", overflowY: "scroll" }}
            >
              {prays &&
                prays.map((pray) => (
                  <Pray key={pray.id} pray={pray} showDetail={showDetail} />
                ))}
            </ul>
          </div>
          <div className="col">
            {prayDetail && (
              <div>
                <h2>{prayDetail.data?.title}</h2>
                <h4>Detalles</h4>
                <p>
                  {prayDetail.data?.description
                    ? prayDetail.data?.description
                    : "No hay descripcion"}
                </p>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="row">
          <div className="col">
            <ul className="list-group">
              {prays &&
                prays.map((pray) => (
                  <Pray
                    key={pray.id}
                    pray={pray}
                    mobile={true}
                    showDetail={showDetail}
                  />
                ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
