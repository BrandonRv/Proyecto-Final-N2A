import { useState, useEffect } from "react";
import useVisibility from './Service/useVisibility';
import useGeoLocation from './Service/useGeoLocation';
import Cloudbackground from "../assets/Cloud-background.png";
import "./BarraState.css";

function BarraState() {

  const BuscadorV = useVisibility(false);
  const { current } = useGeoLocation();

  
  const [currentDate, setCurrentDate] = useState(new Date());
  const daysOfWeek = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
  const months = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
  const dayOfWeek = daysOfWeek[currentDate.getDay()];
  const day = currentDate.getDate();
  const month = months[currentDate.getMonth()];
  const feelsLikeCelsius = (current?.main?.feels_like - 273.15).toFixed(0);

  function BuscadorX() {
    console.log(current)
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);
  
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
          src={`../assets/${current?.weather[0]?.main}.png`}
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
          <h1>{feelsLikeCelsius}</h1>
          <span>°C</span>
        </div>
        <h5>{current?.weather[0]?.main}</h5>
        <h6>Today . {dayOfWeek}, {day} {month}</h6>
        <h6>
          <i className="bi bi-geo-alt-fill">
          </i> {current?.name} 
        </h6>
      </div>
    </>
  );
}
export default BarraState;
