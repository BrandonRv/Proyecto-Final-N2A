import React from "react";
import './ClimaforDAY.css';

function ClimaforDAY() {
  return (
    <>
      <div
        className="container m-0 d-flex flex-column justify-content-around align-items-center"
        style={{
          backgroundColor: "rgb(30, 33, 58)",
        }}
      >
        <div className="dias-semana">
          DiaSem, DiaMes MES
        </div>
        <img
        //   src={params.wheaterIMG}
          className="img-por-dia"
          alt="Weather.png"
        />
        <div className="temp-max-min">
          <div className="d-flex">
            <div>Temp Max</div>
            <div>°C o °F</div>
          </div>
          <div className="d-flex" style={{ color: "rgb(160, 159, 177)" }}>
            <div>Temp Min</div>
            <div>°C o °F</div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ClimaforDAY;
