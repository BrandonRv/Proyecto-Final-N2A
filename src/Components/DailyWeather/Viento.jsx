import React from "react";
import './Viento.css';

function Viento() {
  return (
    <>
      <div id="viento-0" className=" d-flex flex-column justify-content-center align-items-center">
        <div style={{ fontSize: "12px" }}>Wind status</div>
        <div className="container d-flex justify-content-center align-items-center gap-2">
          <div className="valor-viento">Valor velocidad del Viento</div>
          <div>mph</div>
        </div>
        <div className="container d-flex justify-content-center align-items-center gap-2 ">
          <div
            style={{
              transform: `rotate(${
                90
                // (dataWeather && dataWeather.wind.deg) - 90
              }deg)`,
              height: "25px",
              width: "25px",
            }}
            className="badge rounded-circle text-bg-secondary d-flex justify-content-center align-items-center"
          >
            <i className="bi bi-forward-fill"></i>
          </div>
          <div style={{ fontSize: "13px" }}>WSW</div>
        </div>
      </div>
    </>
  );
}
export default Viento;
