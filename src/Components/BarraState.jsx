import React from 'react';
import useVisibility from './service/useVisibility';
import { useWeatherContext } from '../context/WeatherProvider';
import Cloudbackground from "../../public/Cloud-background.png";
import "./BarraState.css";

function BarraState(props) {

  const BuscadorV = useVisibility(false);
 const { geoPosition, current1 } = useWeatherContext();
  const { isVisible } = props;

  
  const [currentDate, setCurrentDate] = useState(new Date());
  const daysOfWeek = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
  const months = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
  const dayOfWeek = daysOfWeek[currentDate.getDay()];
  const day = currentDate.getDate();
  const month = months[currentDate.getMonth()];

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
          onClick={geoPosition}
        >
          <i className="bi bi-geo-alt-fill"></i>
        </button>
      </div>
      <div
        id="cintass"
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
          src={`./img/${current1?.weather[0]?.main}.png`}
          className="tiempo-Icon"
          alt="Weather.png"
        />
      </div>
      <div
        className="container d-flex flex-column justify-content-around align-items-center"
        style={{
          height: "51%",
        }}
      >
        <div className="BarraState">
          <h1>{isVisible ? (current1?.main?.feels_like - 273.15).toFixed(0) : ((current1?.main?.feels_like - 273.15)* 9/5 + 32).toFixed(0)}</h1> 
          <span>{isVisible ? "°C" : "°F"}</span>
        </div>
        <h5>{current1?.weather[0]?.main}</h5>
        <h6>Today . {dayOfWeek}, {day} {month}</h6>
        <h6>
          <i className="bi bi-geo-alt-fill">
          </i> {current1?.name} 
        </h6>
      </div>
    </>
  );
}
export default BarraState;
