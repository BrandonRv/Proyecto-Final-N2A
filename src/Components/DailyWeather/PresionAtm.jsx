import React from "react";
import { useWeatherContext } from '../../context/WeatherProvider';
import './PresionAtm.css';

function PresionAtm() {
  const { current1 } =  useWeatherContext();
  return (
    <>
      <div id="atm-0" className=" d-flex flex-column justify-content-center align-items-center">
        <div>Air Pressure</div>
        <div className="container d-flex justify-content-center align-items-center gap-2">
          <div className="valor-atm">
            {current1?.main?.pressure}
          </div>
          <div>mb</div>
        </div>
      </div>
    </>
  );
}
export default PresionAtm;
