import React from 'react';
import Buscador from "./Components/Buscador";
import BarraState from "./Components/BarraState";
import ClimaforDAY from "./Components/ClimaforDAY";
import Viento from "./Components/DailyWeather/Viento";
import Humedad from "./Components/DailyWeather/Humedad";
import Visibilidad from "./Components/DailyWeather/Visibilidad";
import PresionAtm from "./Components/DailyWeather/PresionAtm";
import { useWeatherContext } from './context/WeatherProvider';
import useVisualFtoC from "./Components/service/useVisualFtoC";
import "./App.css";

function App() {
 const { current2 } = useWeatherContext();
  const [isVisible, setVisibility] = useVisualFtoC(true);

  const converC = () => {
    setVisibility(true);
  };

  const converF = () => {
    setVisibility(false);
  };

  return (
    <>
      <main>
        <nav id="vieww" className="navigatorr activ">
          <Buscador />
        </nav>
        <section
          className="bar-State"
        >
          <BarraState 
          isVisible={isVisible}
          />
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
              onClick={converC}
            >
            °C
            </button>
            <button
              type="button"
              className="btn btn-secondary rounded-circle"
              onClick={converF}
            >
            °F
            </button>
          </div>
          <div className="container-ClimaXDay">
            <ClimaforDAY
              dia={"Mañana"}
              imagenPNG={`./${current2?.list[10]?.weather[0]?.main}.png`}
              tempMax={isVisible ? (current2?.list[7]?.main?.temp_max - 273.15).toFixed(0) : ((current2?.list[7]?.main?.temp_max - 273.15) * 9/5 + 32).toFixed(0)}
              tempMin={isVisible ? (current2?.list[10]?.main?.temp_min - 273.15).toFixed(0) : ((current2?.list[10]?.main?.temp_min - 273.15) * 9/5 + 32).toFixed(0)}
              simbolo={isVisible ? '°C' : '°F'}
            />
            <ClimaforDAY
              fecha={current2?.list[6]?.dt_txt}
              imagenPNG={`./${current2?.list[18]?.weather[0]?.main}.png`}
              tempMax={isVisible ? (current2?.list[15]?.main?.temp_max - 273.15).toFixed(0) : ((current2?.list[15]?.main?.temp_max - 273.15) * 9/5 + 32).toFixed(0)}
              tempMin={isVisible ? (current2?.list[18]?.main?.temp_min - 273.15).toFixed(0) : ((current2?.list[18]?.main?.temp_min - 273.15) * 9/5 + 32).toFixed(0)}
              simbolo={isVisible ? '°C' : '°F'}
            />
            <ClimaforDAY
              fecha={current2?.list[14]?.dt_txt}
              imagenPNG={`./${current2?.list[26]?.weather[0]?.main}.png`}
              tempMax={isVisible ? (current2?.list[22]?.main?.temp_max - 273.15).toFixed(0) : ((current2?.list[22]?.main?.temp_max - 273.15) * 9/5 + 32).toFixed(0)}
              tempMin={isVisible ? (current2?.list[26]?.main?.temp_min - 273.15).toFixed(0) : ((current2?.list[26]?.main?.temp_min - 273.15) * 9/5 + 32).toFixed(0)}
              simbolo={isVisible ? '°C' : '°F'}
            />
            <ClimaforDAY
              fecha={current2?.list[22]?.dt_txt}
              imagenPNG={`./${current2?.list[34]?.weather[0]?.main}.png`}
              tempMax={isVisible ? (current2?.list[31]?.main?.temp_max - 273.15).toFixed(0) : ((current2?.list[31]?.main?.temp_max - 273.15) * 9/5 + 32).toFixed(0)}
              tempMin={isVisible ? (current2?.list[34]?.main?.temp_min - 273.15).toFixed(0) : ((current2?.list[34]?.main?.temp_min - 273.15) * 9/5 + 32).toFixed(0)}
              simbolo={isVisible ? '°C' : '°F'}
            />
            <ClimaforDAY
              fecha={current2?.list[30]?.dt_txt}
              imagenPNG={`./${current2?.list[38]?.weather[0]?.main}.png`}
              tempMax={isVisible ? (current2?.list[39]?.main?.temp_max - 273.15).toFixed(0) : ((current2?.list[39]?.main?.temp_max - 273.15) * 9/5 + 32).toFixed(0)}
              tempMin={isVisible ? (current2?.list[37]?.main?.temp_min - 273.15).toFixed(0) : ((current2?.list[37]?.main?.temp_min - 273.15) * 9/5 + 32).toFixed(0)}
              simbolo={isVisible ? '°C' : '°F'}
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
