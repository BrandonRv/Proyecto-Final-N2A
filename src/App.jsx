import { useEffect, useState } from "react";
import Buscador from "./Components/Buscador";
import BarraState from "./Components/BarraState";
import ClimaforDAY from "./Components/ClimaforDAY";
import Viento from "./Components/DailyWeather/Viento";
import Humedad from "./Components/DailyWeather/Humedad";
import Visibilidad from "./Components/DailyWeather/Visibilidad";
import PresionAtm from "./Components/DailyWeather/PresionAtm";
import useApiToday from "./Components/service/useApiToday";
import "./App.css";

function App() {
  const { current } = useApiToday();
  const [showForm, setShowForm] = useState(true);

  function ConverCoF(){
    setShowForm(!showForm);
  }

  return (
    <>
      <main>
        <nav id="vieww" className="navigatorr activ">
          <Buscador />
        </nav>
        <section
          className="bar-State"
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
              onClick={ConverCoF}
            >
            °C
            </button>
            <button
              type="button"
              className="btn btn-secondary rounded-circle"
              onClick={ConverCoF}
            >
            °F
            </button>
          </div>
          <div className="container-ClimaXDay">
            <ClimaforDAY
              dia={"Mañana"}
              imagenPNG={`./${current?.list[10]?.weather[0]?.main}.png`}
              tempMax={showForm ? (current?.list[10]?.main?.temp_max - 273.15).toFixed(0) : ((current?.list[10]?.main?.temp_max - 273.15) * 9/5 + 32).toFixed(0)}
              tempMin={showForm ? (current?.list[7]?.main?.temp_max - 273.15).toFixed(0) : ((current?.list[7]?.main?.temp_max - 273.15) * 9/5 + 32).toFixed(0)}
              simbolo={showForm ? '°C' : '°F'}
            />
            <ClimaforDAY
              fecha={current?.list[18]?.dt_txt}
              imagenPNG={`./${current?.list[18]?.weather[0]?.main}.png`}
              tempMax={showForm ? (current?.list[18]?.main?.temp_max - 273.15).toFixed(0) : ((current?.list[18]?.main?.temp_max - 273.15) * 9/5 + 32).toFixed(0)}
              tempMin={showForm ? (current?.list[15]?.main?.temp_max - 273.15).toFixed(0) : ((current?.list[15]?.main?.temp_max - 273.15) * 9/5 + 32).toFixed(0)}
              simbolo={showForm ? '°C' : '°F'}
            />
            <ClimaforDAY
              fecha={current?.list[26]?.dt_txt}
              imagenPNG={`./${current?.list[26]?.weather[0]?.main}.png`}
              tempMax={showForm ? (current?.list[26]?.main?.temp_max - 273.15).toFixed(0) : ((current?.list[26]?.main?.temp_max - 273.15) * 9/5 + 32).toFixed(0)}
              tempMin={showForm ? (current?.list[23]?.main?.temp_max - 273.15).toFixed(0) : ((current?.list[23]?.main?.temp_max - 273.15) * 9/5 + 32).toFixed(0)}
              simbolo={showForm ? '°C' : '°F'}
            />
            <ClimaforDAY
              fecha={current?.list[34]?.dt_txt}
              imagenPNG={`./${current?.list[34]?.weather[0]?.main}.png`}
              tempMax={showForm ? (current?.list[34]?.main?.temp_max - 273.15).toFixed(0) : ((current?.list[34]?.main?.temp_max - 273.15) * 9/5 + 32).toFixed(0)}
              tempMin={showForm ? (current?.list[31]?.main?.temp_max - 273.15).toFixed(0) : ((current?.list[31]?.main?.temp_max - 273.15) * 9/5 + 32).toFixed(0)}
              simbolo={showForm ? '°C' : '°F'}
            />
            <ClimaforDAY
              fecha={current?.list[39]?.dt_txt}
              imagenPNG={`./${current?.list[38]?.weather[0]?.main}.png`}
              tempMax={showForm ? (current?.list[39]?.main?.temp_max - 273.15).toFixed(0) : ((current?.list[39]?.main?.temp_max - 273.15) * 9/5 + 32).toFixed(0)}
              tempMin={showForm ? (current?.list[37]?.main?.temp_max - 273.15).toFixed(0) : ((current?.list[37]?.main?.temp_max - 273.15) * 9/5 + 32).toFixed(0)}
              simbolo={showForm ? '°C' : '°F'}
            />
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
