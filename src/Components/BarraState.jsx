import { useState } from "react";
import useVisibility from './Service/useVisibility';
import Cloudbackground from "../../public/Cloud-background.png";
import "./BarraState.css";

function BarraState() {

  const BuscadorV = useVisibility(false);

  function BuscadorX() {
      console.log("funciona")
  }
  
  return (
    <>
      <div className="container p-4 d-flex justify-content-between">
        <button
          type="button"
          className="btn btn-secondary"
          onClick={BuscadorV}
        >
          Search for places
        </button>
        <button
          type="button"
          className="btn btn-secondary rounded-circle"
          onClick={BuscadorX}
        >
          <i className="bi bi-geo-alt-fill"></i>
        </button>
      </div>
      <div
        className="container d-flex justify-content-center align-items-center"
        style={{
          height: "35vh",
        }}
      >
        <img
          src={Cloudbackground}
          className="Nubes-de-Background"
          alt="Cloud-background.png"
        />
        <img
          //   src={`./weatherResources/${
          //     dataWeather && dataWeather.weather[0].main
          //   }.png`}
          className="tiempo-Icon"
          alt="Weather.png"
        />
      </div>
      <div
        className="container d-flex flex-column justify-content-around align-items-center"
        style={{
          // border: "1px solid blue",
          height: "51%",
        }}
      >
        <div className="BarraState">
          <h1>TEMP NUM</h1>
          <span> °Simbolo C o F</span>
        </div>
        <h5>Tiempo Actual de Ciudad</h5>
        <h6>Today . DiaSemana, Numero Mes</h6>
        <h6>
          <i className="bi bi-geo-alt-fill"></i>Nombre de Ubicacion
        </h6>
      </div>
    </>
  );
}
export default BarraState;
