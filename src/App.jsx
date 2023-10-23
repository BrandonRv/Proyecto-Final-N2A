import { useEffect, useState } from "react";
import Buscador from "./Components/Buscador";
import BarraState from "./Components/BarraState";
import ClimaforDAY from "./Components/ClimaforDAY";
import Viento from "./Components/DailyWeather/Viento";
import Humedad from "./Components/DailyWeather/Humedad";
import Visibilidad from "./Components/DailyWeather/Visibilidad";
import PresionAtm from "./Components/DailyWeather/PresionAtm";
import "./App.css";

function App() {
  return (
    <>
      <main>
        <nav id="vieww" className="navigatorr activ">
          <Buscador />
        </nav>
        <section
        // className="bar-State"
        className="bar-State"
        // {btn-active ? "{btn-active ? "activ" : ""}" : ""}
        >
          <BarraState />
        </section>
        <div className="containerr-right">
          <div
            className="container d-flex justify-content-end align-items-end"
            style={{
              width: "80%",
              padding: "0",
              gap: "15px",
            }}
          >
            <button
              type="button"
              className="btn btn-secondary rounded-circle"
              // onClick={ConverToC}
            >
              °C
            </button>
            <button
              type="button"
              className="btn btn-secondary rounded-circle"
              // onClick={ConverToF}
            >
              °F
            </button>
          </div>
          <div className="container-ClimaXDay">
            <ClimaforDAY />
            <ClimaforDAY />
            <ClimaforDAY />
            <ClimaforDAY />
            <ClimaforDAY />
          </div>
          <div
            style={{
              width: "80%",
            }}
          >
            <div
              className="container d-flex flex-column justify-content-center align-items-start"
              style={{
                width: "100%",
              }}
            >
              <p className="fw-semibold" style={{ fontSize: "18px" }}>
                Today's Hightlights
              </p>
            </div>
            <div className="box-detalles">
              <Viento />
              <Humedad />
              <Visibilidad />
              <PresionAtm />
            </div>
          </div>
          <div
            className="container d-flex m-0 p-0 justify-content-center align-items-center"
            style={{
              width: "80%",
            }}
          >
            <footer className="el-mejor">
              create by BrandonRv - devChallenges.io
            </footer>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
